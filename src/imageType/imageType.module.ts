import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { ImageTypeService } from './imageType.service';
import { ImageTypeController } from './imageType.controller';
import { UserModule } from 'src/user/user.module';
import { AuthMiddleware } from 'src/user/auth.middleware';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [UserModule, ConfigModule],
  controllers: [ImageTypeController],
  providers: [ImageTypeService],
})
export class ImageTypeModule implements NestModule {
  public configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .exclude(
        { path: 'imageType', method: RequestMethod.GET },
        { path: 'imageType/:id', method: RequestMethod.GET },
      )
      .forRoutes(ImageTypeController);
  }
}
