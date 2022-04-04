import { HttpException, Injectable } from '@nestjs/common';
import { totp } from 'otplib';
import config from 'config';
import * as jwt from 'jsonwebtoken';
import {
  CreateUserDto,
  LoginUserDto,
  UpdateUserDto,
  User,
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
  credit: true,
  introduction_id: true,
};

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService, private redis: RedisService) {}

  async login(payload: LoginUserDto): Promise<boolean> {
    if (payload.phone != '09012883045') {
      throw new HttpException('No user found', 404);
    }
    return true;
  }

  async verify(payload: VerifyUserDto): Promise<UserRO> {
    if (payload.otp == '1') {
      throw new HttpException('No user found', 404);
    } else if (payload.otp == '2') {
      throw new HttpException('No otp found', 404);
    } else if (payload.otp == '3') {
      throw new HttpException('Wrong otp', 400);
    }

    const user = {
      id: 1,
      phone: '09012883045',
      name: 'mohammad',
      last: 'mohammadi',
      age: 25,
      gender: 'male',
      credit: 10000000,
      introduction_id: 'ap2015',
    };

    const token = await this.generateJWT(user);
    return {
      user: { ...user, token },
    };
  }

  async create(dto: CreateUserDto): Promise<UserDisplayRO> {
    if (dto.phone == '1') {
      throw new HttpException('phone number already exists', 400);
    }

    const user = {
      id: 1,
      introduction_id: 'ap2015',
    };

    return { user };
  }

  async update(
    id: number,
    userID: number,
    data: UpdateUserDto,
  ): Promise<UserRO> {
    if (data.phone == '1') {
      throw new HttpException('No user found', 404);
    }

    const user = {
      id: 1,
      phone: '09012883045',
      name: 'mohammad',
      last: 'mohammadi',
      age: 25,
      gender: 'male',
      credit: 10000000,
      introduction_id: 'ap2015',
    };
    return { user };
  }

  async delete(id: number, userID: number): Promise<UserDisplayRO> {
    const user = {
      id: 1,
      name: 'mohammad',
      last: 'mohammadi',
      age: 25,
      gender: 'male',
      introduction_id: 'ap2015',
    };
    return { user };
  }

  async findById(id: number): Promise<UserDisplayRO> {
    const user = await this.prisma.customer.findUnique({
      where: { id },
      select,
    });
    return { user };
  }

  async findByPhone(phone: string): Promise<UserDisplayRO> {
    const user = await this.prisma.customer.findUnique({
      where: { phone },
      select,
    });
    return { user };
  }

  // Use this just for Auth Middleware
  async findByPhoneAuth(phone: string): Promise<UserRO> {
    const user = await this.prisma.customer.findUnique({
      where: { phone },
    });

    if (!user) {
      throw new HttpException('No user found', 404);
    }

    const credit = Number(user.credit);
    delete user.credit;
    return { user: { ...user, credit } };
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
