import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { QrImageService } from './qrImage.service';
import { QrImageController } from './qrImage.controller';
import { UserModule } from 'src/user/user.module';
import { AuthMiddleware } from 'src/user/auth.middleware';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [UserModule, ConfigModule],
  controllers: [QrImageController],
  providers: [QrImageService],
})
export class QrImageModule implements NestModule {
  public configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .exclude(
        { path: 'qrImage', method: RequestMethod.GET },
        { path: 'qrImage/:id', method: RequestMethod.GET },
      )
      .forRoutes(QrImageController);
  }
}
