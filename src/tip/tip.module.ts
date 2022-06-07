import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { TipService } from './tip.service';
import { TipController } from './tip.controller';
import { UserModule } from 'src/user/user.module';
import { AuthMiddleware } from 'src/user/auth.middleware';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [UserModule, ConfigModule],
  controllers: [TipController],
  providers: [TipService],
})
export class TipModule implements NestModule {
  public configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .exclude(
        { path: 'tip', method: RequestMethod.GET },
        { path: 'tip/:id', method: RequestMethod.GET },
      )
      .forRoutes(TipController);
  }
}
