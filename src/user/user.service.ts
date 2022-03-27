import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { totp } from 'otplib';
import config from 'config';
import * as jwt from 'jsonwebtoken';
import {
  CreateUserDto,
  LoginUserDto,
  UpdateUserDto,
  User,
  UserDisplay,
  UserDisplayRO,
  UserRO,
  VerifyUserDto,
} from './dto';
import { PrismaService } from '../shared/services/prisma.service';
import { RedisService } from '../shared/services/redis.service';

const select = {
  id: true,
  name: true,
  last: true,
  age: true,
  gender: true,
  weight: true,
  height: true,
};

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService, private redis: RedisService) {}

  async findAll(): Promise<UserDisplay[]> {
    return await this.prisma.user.findMany({ select });
  }

  async login(payload: LoginUserDto): Promise<boolean> {
    const user = await this.prisma.user.findUnique({
      where: { phone: payload.phone },
    });

    if (!user) {
      throw new HttpException('No user found', 401);
    }

    const code = totp.generate(config.get('secret'));

    // cache otp in redis
    await this.redis.set(`${payload.phone}`, `${code}`);
    await this.redis.expire(`${payload.phone}`, 120);

    // send otp sms

    // if all done
    return true;
  }

  async verify(payload: VerifyUserDto): Promise<UserRO> {
    const user = await this.prisma.user.findUnique({
      where: { phone: payload.phone },
    });

    if (!user) {
      throw new HttpException('No user found', 401);
    }

    const code = await this.redis.get(`${payload.phone}`);

    if (!code) {
      throw new HttpException('No otp found', 400);
    } else if (payload.otp !== code) {
      throw new HttpException('Wrong otp', 400);
    }

    await this.redis.del(`${payload.phone}`);

    const token = await this.generateJWT(user);
    return {
      user: { ...user, token },
    };
  }

  async create(dto: CreateUserDto): Promise<UserDisplayRO> {
    const { phone } = dto;

    // check uniqueness of phone
    const userNotUnique = await this.prisma.user.findUnique({
      where: { phone: phone },
    });

    if (userNotUnique) {
      throw new HttpException(
        'phone number already exists',
        HttpStatus.BAD_REQUEST,
      );
    }

    const data = { phone };
    const user = await this.prisma.user.create({ data, select });

    return { user };
  }

  async update(id: number, data: UpdateUserDto): Promise<UserDisplayRO> {
    const where = { id };
    const user = await this.prisma.user.update({ where, data, select });

    return { user };
  }

  async delete(id: number): Promise<UserDisplayRO> {
    const user = await this.prisma.user.delete({ where: { id }, select });
    return { user };
  }

  async findById(id: number): Promise<UserDisplayRO> {
    const user = await this.prisma.user.findUnique({ where: { id }, select });
    return { user };
  }

  async findByPhone(phone: string): Promise<UserDisplayRO> {
    const user = await this.prisma.user.findUnique({
      where: { phone },
      select,
    });
    return { user };
  }

  // Use this just for Auth Middleware
  async findByPhoneAuth(phone: string): Promise<UserRO> {
    const user = await this.prisma.user.findUnique({
      where: { phone },
    });
    return { user };
  }

  public generateJWT(user: User): string {
    const today = new Date();
    const exp = new Date(today);
    exp.setDate(today.getDate() + 60);

    return jwt.sign(
      {
        id: user.id,
        phone: user.phone,
        exp: exp.getTime() / 1000,
      },
      config.get('secret'),
    );
  }
}
