import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { PrismaService } from 'src/shared/services/prisma.service';
import { AuthMiddleware } from './auth.middleware';
import { RedisService } from 'src/shared/services/redis.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  providers: [UserService, PrismaService, RedisService],
  controllers: [UserController],
  exports: [UserService],
  imports: [ConfigModule],
})
export class UserModule implements NestModule {
  public configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .exclude('user/login', { path: 'user', method: RequestMethod.POST })
      .forRoutes(UserController);
  }
}
