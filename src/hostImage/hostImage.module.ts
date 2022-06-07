import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { HostImageService } from './hostImage.service';
import { HostImageController } from './hostImage.controller';
import { UserModule } from 'src/user/user.module';
import { AuthMiddleware } from 'src/user/auth.middleware';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [UserModule, ConfigModule],
  controllers: [HostImageController],
  providers: [HostImageService],
})
export class HostImageModule implements NestModule {
  public configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .exclude(
        { path: 'hostImage', method: RequestMethod.GET },
        { path: 'hostImage/:id', method: RequestMethod.GET },
      )
      .forRoutes(HostImageController);
  }
}
