import { Test, TestingModule } from '@nestjs/testing';
import { RedisService } from '../shared/services/redis.service';
import { PrismaService } from '../shared/services/prisma.service';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { PrismaClient } from '@prisma/client';
import { ConfigModule } from '@nestjs/config';
import configuration from 'src/config/configuration';

describe('UserController', () => {
  let controller: UserController;
  let service: UserService;
  let redis: RedisService;

  beforeAll(async () => {
    const prisma = new PrismaClient();
    await prisma.customer.deleteMany({});
  });

  beforeEach(async () => {
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
    await redis.onModuleInit();
  });

  afterEach(async () => {
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

    it('should decline request login validation on non existing user', async () => {
      expect(controller.login({ phone: '+989132234231' })).rejects.toThrow(
        'No user found',
      );
    });
  });
});
