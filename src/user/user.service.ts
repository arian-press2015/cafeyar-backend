import { HttpException, Injectable } from '@nestjs/common';
import { totp } from 'otplib';
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
import { PrismaService } from 'src/shared/services/prisma.service';
import { RedisService } from 'src/shared/services/redis.service';
import { ConfigService } from '@nestjs/config';
import { v4 as uuid } from 'uuid';

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
  constructor(
    private prisma: PrismaService,
    private redis: RedisService,
    private configService: ConfigService,
  ) {}

  async login(payload: LoginUserDto): Promise<boolean> {
    // create an otp
    const otp = await totp.generate(
      this.configService.get<string>('otp_secret'),
    );

    // store the otp
    const pattern = `login-otp-${payload.phone}`;
    await this.redis.set(pattern, otp);
    await this.redis.expire(pattern, 120);

    // send the otp
    console.log(`otp is ${otp}`);

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
      phone: '+989012883045',
      name: 'mohammad',
      last: 'mohammadi',
      age: 25,
      gender: 'male',
      credit: 10000000n,
      introduction_id: 'ap2015',
    };

    const token = await this.generateJWT(user);
    return {
      user: { ...user, token },
    };
  }

  async create(dto: CreateUserDto): Promise<UserDisplayRO> {
    // reward the introducer
    if (dto.introduction) {
      const introducer = await this.prisma.customer.findUnique({
        select,
        where: { introduction_id: dto.introduction },
      });
      if (!introducer) throw new HttpException('Invalid Introduction_id', 400);
      else {
        await this.prisma.customer.update({
          select,
          data: { credit: { increment: 100000n } },
          where: { introduction_id: dto.introduction },
        });
      }
    }

    const user = await this.prisma.customer.create({
      select,
      data: {
        phone: dto.phone,
        introduction_id: uuid(),
        creation_date: new Date(),
      },
    });

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
      phone: '+989012883045',
      name: 'mohammad',
      last: 'mohammadi',
      age: 25,
      gender: 'male',
      credit: 10000000n,
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

  async findByPhone(phone: string): Promise<UserRO> {
    const user = await this.prisma.customer.findUnique({
      select: {
        ...select,
        phone: true,
      },
      where: {
        phone,
      },
    });
    return { user };
  }

  // Use this just for Auth Middleware
  async findByPhoneAuth(phone: string): Promise<UserRO> {
    const user = {
      id: 1,
      phone: '+989012883045',
      name: 'mohammad',
      last: 'mohammadi',
      age: 25,
      gender: 'male',
      credit: 10000000n,
      introduction_id: 'ap2015',
    };
    return { user };
  }

  async checkUserExistance(phone: string): Promise<boolean> {
    const exists = await this.prisma.customer.findUnique({
      select,
      where: { phone },
    });
    if (exists) {
      return false;
    }
    return true;
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
      this.configService.get<string>('jwt_secret'),
    );
  }
}
