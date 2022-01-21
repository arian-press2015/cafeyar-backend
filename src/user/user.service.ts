import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import OTP from 'otp';
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
import { PrismaService } from 'src/shared/services/prisma.service';

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
  constructor(private prisma: PrismaService) {}

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

    const otp = new OTP({ keySize: 128, codeLength: 5 });
    const code = otp.totp(Date.now());

    // cache otp in redis

    // send otp sms

    // if all done
    return true;
  }

  async verify(payload: VerifyUserDto): Promise<UserRO> {
    // find otp from redis
    // if phone and otp code matches ...

    const user = await this.prisma.user.findUnique({
      where: { phone: payload.phone },
    });

    const token = await this.generateJWT(user);
    return {
      user: { token, ...user },
    };
  }

  async create(dto: CreateUserDto): Promise<UserDisplayRO> {
    const { phone } = dto;

    // check uniqueness of phone
    const userNotUnique = await this.prisma.user.findUnique({
      where: { phone },
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
