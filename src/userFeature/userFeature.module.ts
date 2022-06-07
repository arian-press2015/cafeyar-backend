import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { UserFeatureService } from './userFeature.service';
import { UserFeatureController } from './userFeature.controller';
import { UserModule } from 'src/user/user.module';
import { AuthMiddleware } from 'src/user/auth.middleware';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [UserModule, ConfigModule],
  controllers: [UserFeatureController],
  providers: [UserFeatureService],
})
export class UserFeatureModule implements NestModule {
  public configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .exclude(
        { path: 'userFeature', method: RequestMethod.GET },
        { path: 'userFeature/:id', method: RequestMethod.GET },
      )
      .forRoutes(UserFeatureController);
  }
}
