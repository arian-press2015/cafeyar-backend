import { Test, TestingModule } from '@nestjs/testing';
import { RedisService } from '../shared/services/redis.service';
import { PrismaService } from '../shared/services/prisma.service';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { ConfigModule } from '@nestjs/config';
import configuration from 'src/config/configuration';

describe('UserController', () => {
  let controller: UserController;
  let service: UserService;
  let redis: RedisService;
  let prisma: PrismaService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [UserService, PrismaService, RedisService],
      imports: [
        ConfigModule.forRoot({
          envFilePath: `${process.cwd()}/.env.${process.env.NODE_ENV}`,
          load: [configuration],
          cache: true,
        }),
      ],
    }).compile();

    controller = module.get<UserController>(UserController);
    service = module.get<UserService>(UserService);
    redis = module.get<RedisService>(RedisService);
    prisma = module.get<PrismaService>(PrismaService);
    await redis.onModuleInit();
    await prisma.customer.deleteMany({});
  });

  afterAll(async () => {
    await redis.onModuleDestroy();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('async create(dto: CreateUserDto): Promise<UserDisplayRO>', () => {
    it('should create a new user', async () => {
      const result = await controller.create({ phone: '+989012883045' });

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

    it('should call service.create once with phone', async () => {
      const serviceCalled = jest.spyOn(service, 'create');

      await controller.create({ phone: '+989012883046' });

      expect(serviceCalled).toBeCalledWith({ phone: '+989012883046' });
      expect(serviceCalled).toBeCalledTimes(1);
    });

    it('should throw error on existing phone number', async () => {
      expect(controller.create({ phone: '+989012883045' })).rejects.toThrow(
        'Phone number already taken',
      );
    });

    it('should throw error on invalid introduction code', async () => {
      expect(
        controller.create({
          phone: '+989012883044',
          introduction: 'chert_code',
        }),
      ).rejects.toThrow('Invalid Introduction_id');
    });

    it('should reward the introducer correctly', async () => {
      const introducer = await service.findByPhone('+989012883045');
      await controller.create({
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
      expect(await controller.login({ phone: '+989012883045' })).toBe(true);
    });

    it('should call service.login once with phone', async () => {
      const serviceCalled = jest.spyOn(service, 'login');

      await controller.login({ phone: '+989012883045' });

      expect(serviceCalled).toBeCalledWith({ phone: '+989012883045' });
      expect(serviceCalled).toBeCalledTimes(1);
    });

    it('should decline request login validation on non existing user', async () => {
      expect(controller.login({ phone: '+989132234231' })).rejects.toThrow(
        'No user found',
      );
    });
  });

  describe('async verify(verifyUserDto: VerifyUserDto): Promise<UserRO>', () => {
    it('should verify validation request', async () => {
      const phone = '+989012883045';
      await controller.login({ phone });

      jest.spyOn(redis, 'get').mockImplementation(async () => '123456');

      const result = await controller.verify({
        phone,
        otp: '123456',
      });

      expect(typeof result).toBe('object');
      expect(typeof result.user).toBe('object');
      expect(result.user).toStrictEqual({
        id: expect.any(Number),
        phone: expect.any(String),
        name: expect.any(String),
        last: expect.any(String),
        gender: null,
        age: null,
        credit: expect.any(BigInt),
        introduction_id: expect.any(String),
        token: expect.any(String),
      });
    });

    it('should call service.verify once with phone and otp', async () => {
      const serviceCalled = jest.spyOn(service, 'verify');

      await controller.verify({ phone: '+989012883045', otp: '123456' });

      expect(serviceCalled).toBeCalledWith({
        phone: '+989012883045',
        otp: '123456',
      });
      expect(serviceCalled).toBeCalledTimes(1);
    });

    it('should decline validation request on non existing user', async () => {
      await expect(
        controller.verify({ phone: '+989132234231', otp: 'abcdef' }),
      ).rejects.toThrow('No user found');
    });

    it('should decline validation request on no otp generated', async () => {
      jest.spyOn(redis, 'get').mockImplementation(async () => undefined);

      await expect(
        controller.verify({ phone: '+989012883045', otp: 'abcdef' }),
      ).rejects.toThrow('No otp found');
    });

    it('should decline validation request on wrong otp', async () => {
      await controller.login({ phone: '+989012883045' });

      jest.spyOn(redis, 'get').mockImplementation(async () => '123456');

      await expect(
        controller.verify({ phone: '+989012883045', otp: 'abcdef' }),
      ).rejects.toThrow('Wrong otp');
    });
  });

  describe(`async findMe(@User('phone') phone: string): Promise<UserRO>`, () => {
    it('should find and return user info', async () => {
      const result = await controller.findMe('+989012883045');
      expect(result.user).toStrictEqual({
        phone: '+989012883045',
        id: expect.any(Number),
        name: 'کاربر',
        last: 'گرامی',
        age: null,
        gender: null,
        credit: expect.any(BigInt),
        introduction_id: expect.any(String),
      });
    });

    it('should call service.findByPhone once with phone', async () => {
      const serviceCalled = jest.spyOn(service, 'findByPhone');

      await controller.findMe('+989012883045');

      expect(serviceCalled).toBeCalledWith('+989012883045');
      expect(serviceCalled).toBeCalledTimes(1);
    });
  });
});
