import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { PrismaService } from '../shared/services/prisma.service';
import { AuthMiddleware } from './auth.middleware';
import { RedisService } from '../shared/services/redis.service';

@Module({
  providers: [UserService, PrismaService, RedisService],
  controllers: [UserController],
  exports: [UserService],
})
export class UserModule implements NestModule {
  public configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .exclude('user/login', { path: 'user', method: RequestMethod.POST })
      .forRoutes(UserController);
  }
}
