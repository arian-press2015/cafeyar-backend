import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { RateService } from './rate.service';
import { RateController } from './rate.controller';
import { UserModule } from 'src/user/user.module';
import { AuthMiddleware } from 'src/user/auth.middleware';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [UserModule, ConfigModule],
  controllers: [RateController],
  providers: [RateService],
})
export class RateModule implements NestModule {
  public configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .exclude(
        { path: 'rate', method: RequestMethod.GET },
        { path: 'rate/:id', method: RequestMethod.GET },
      )
      .forRoutes(RateController);
  }
}
