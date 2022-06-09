import { ConfigModule } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import { PrismaClient } from '@prisma/client';
import configuration from 'src/config/configuration';
import { PrismaService } from '../shared/services/prisma.service';
import { RedisService } from '../shared/services/redis.service';
import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;
  let redis: RedisService;

  beforeAll(async () => {
    const prisma = new PrismaClient();
    await prisma.customer.deleteMany({});
  });

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService, PrismaService, RedisService],
      imports: [
        ConfigModule.forRoot({
          envFilePath: `${process.cwd()}/.env.${process.env.NODE_ENV}`,
          load: [configuration],
          cache: true,
        }),
      ],
    }).compile();

    service = module.get<UserService>(UserService);
    redis = module.get<RedisService>(RedisService);
    await redis.onModuleInit();
  });

  afterEach(async () => {
    await redis.onModuleDestroy();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('async create(dto: CreateUserDto): Promise<UserDisplayRO>', () => {
    it('should create a new user', async () => {
      const result = await service.create({ phone: '+989012883045' });
      expect(typeof result).toBe('object');
      expect(typeof result.user).toBe('object');
      expect(result.user).toStrictEqual({
        id: expect.any(Number),
        name: 'کاربر',
        last: 'گرامی',
        age: null,
        gender: null,
        credit: 0n,
        introduction_id: expect.any(String),
      });
    });

    it('should throw error on invalid introduction code', async () => {
      expect(
        service.create({ phone: '+989012883044', introduction: 'chert_code' }),
      ).rejects.toThrow('Invalid Introduction_id');
    });

    it('should reward the introducer correctly', async () => {
      const introducer = await service.findByPhone('+989012883045');
      await service.create({
        phone: '+989012883044',
        introduction: introducer.user.introduction_id,
      });
      const introducerAfter = await service.findByPhone('+989012883045');
      expect(introducerAfter.user.credit).toEqual(
        introducer.user.credit + 100000n,
      );
    });
  });

  describe('async login(loginUserDto: LoginUserDto): Promise<boolean>', () => {
    it('should request login validation', async () => {
      expect(await service.login({ phone: '+989012883045' })).toBe(true);
    });
  });

  // describe('async verify(verifyUserDto: VerifyUserDto): Promise<UserRO>', () => {
  //   it('should verify validation request', async () => {
  //     await service.login({ phone: '09012883045' });

  //     jest.spyOn(redis, 'get').mockImplementation(
  //       () =>
  //         new Promise((res) => {
  //           res('123456');
  //         }),
  //     );

  //     const result = await service.verify({
  //       phone: '09012883045',
  //       otp: '123456',
  //     });

  //     expect(typeof result).toBe('object');
  //     expect(typeof result.user).toBe('object');
  //     expect(result.user).toStrictEqual({
  //       id: expect.any(Number),
  //       phone: expect.any(String),
  //       name: null,
  //       last: null,
  //       age: null,
  //       gender: null,
  //       weight: null,
  //       height: null,
  //       token: expect.any(String),
  //     });
  //   });

  //   it('should decline validation request on non existing user', async () => {
  //     expect(
  //       service.verify({ phone: '09132234231', otp: 'abcdef' }),
  //     ).rejects.toThrow('No user found');
  //   });

  //   it('should decline validation request on no otp generated', async () => {
  //     expect(
  //       service.verify({ phone: '09012883045', otp: 'abcdef' }),
  //     ).rejects.toThrow('No otp found');
  //   });

  //   it('should decline validation request on wrong otp', async () => {
  //     await service.login({ phone: '09012883045' });

  //     expect(
  //       service.verify({ phone: '09012883045', otp: 'abcdef' }),
  //     ).rejects.toThrow('Wrong otp');
  //   });
  // });

  // describe('async update(userData: UpdateUserDto): Promise<UserDisplayRO>', () => {
  //   it('should update current user', async () => {
  //     await service.login({ phone: '09012883045' });

  //     jest.spyOn(redis, 'get').mockImplementation(
  //       () =>
  //         new Promise((res) => {
  //           res('123456');
  //         }),
  //     );

  //     const result = await service.verify({
  //       phone: '09012883045',
  //       otp: '123456',
  //     });

  //     const id = result.user.id;

  //     expect(
  //       (
  //         await service.update(1, id, {
  //           name: 'ap2015',
  //           last: 'AP2015',
  //           age: 25,
  //           gender: 'Male',
  //         })
  //       ).user,
  //     ).toStrictEqual({
  //       id: expect.any(Number),
  //       name: expect.any(String),
  //       last: expect.any(String),
  //       age: expect.any(Number),
  //       gender: expect.any(String),
  //       weight: expect.any(Number),
  //       height: expect.any(Number),
  //     });
  //   });
  // });

  // describe('async findById(id: number): Promise<UserDisplayRO>', () => {
  //   it('should find and return user info', async () => {
  //     await service.login({ phone: '09012883045' });

  //     jest.spyOn(redis, 'get').mockImplementation(
  //       () =>
  //         new Promise((res) => {
  //           res('123456');
  //         }),
  //     );

  //     const result = await service.verify({
  //       phone: '09012883045',
  //       otp: '123456',
  //     });

  //     const id = result.user.id;

  //     expect((await service.findById(id)).user).toStrictEqual({
  //       id: expect.any(Number),
  //       name: expect.any(String),
  //       last: expect.any(String),
  //       age: expect.any(Number),
  //       gender: expect.any(String),
  //       weight: expect.any(Number),
  //       height: expect.any(Number),
  //     });
  //   });
  // });

  // describe('async findByPhone(phone: string): Promise<UserDisplayRO>', () => {
  //   it('should find and return user info', async () => {
  //     await service.login({ phone: '09012883045' });

  //     jest.spyOn(redis, 'get').mockImplementation(
  //       () =>
  //         new Promise((res) => {
  //           res('123456');
  //         }),
  //     );

  //     const result = await service.verify({
  //       phone: '09012883045',
  //       otp: '123456',
  //     });

  //     const phone = result.user.phone;

  //     expect((await service.findByPhone(phone)).user).toStrictEqual({
  //       id: expect.any(Number),
  //       name: expect.any(String),
  //       last: expect.any(String),
  //       age: expect.any(Number),
  //       gender: expect.any(String),
  //       weight: expect.any(Number),
  //       height: expect.any(Number),
  //     });
  //   });
  // });

  // describe('async findByPhoneAuth(phone: string): Promise<UserDisplayRO>', () => {
  //   it('should find and return user info', async () => {
  //     await service.login({ phone: '09012883045' });

  //     jest.spyOn(redis, 'get').mockImplementation(
  //       () =>
  //         new Promise((res) => {
  //           res('123456');
  //         }),
  //     );

  //     const result = await service.verify({
  //       phone: '09012883045',
  //       otp: '123456',
  //     });

  //     const phone = result.user.phone;

  //     expect((await service.findByPhoneAuth(phone)).user).toStrictEqual({
  //       id: expect.any(Number),
  //       phone: '09012883045',
  //       name: expect.any(String),
  //       last: expect.any(String),
  //       age: expect.any(Number),
  //       gender: expect.any(String),
  //       weight: expect.any(Number),
  //       height: expect.any(Number),
  //       token: null,
  //     });
  //   });
  // });

  // describe('async delete(): Promise<UserDisplayRO>', () => {
  //   it('should delete the user', async () => {
  //     await service.login({ phone: '09012883045' });

  //     jest.spyOn(redis, 'get').mockImplementation(
  //       () =>
  //         new Promise((res) => {
  //           res('123456');
  //         }),
  //     );

  //     const result = await service.verify({
  //       phone: '09012883045',
  //       otp: '123456',
  //     });

  //     const id = result.user.id;

  //     expect((await service.delete(1, id)).user).toStrictEqual({
  //       id: expect.any(Number),
  //       name: expect.any(String),
  //       last: expect.any(String),
  //       age: expect.any(Number),
  //       gender: expect.any(String),
  //       weight: expect.any(Number),
  //       height: expect.any(Number),
  //     });
  //   });
  // });
});
