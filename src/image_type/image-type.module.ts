import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ImageTypeService } from './image-type.service';
import { ImageTypeController } from './image-type.controller';
import { UserModule } from 'src/user/user.module';
import { AuthMiddleware } from 'src/user/auth.middleware';

@Module({
  imports: [UserModule],
  controllers: [ImageTypeController],
  providers: [ImageTypeService],
})
export class ImageTypeModule implements NestModule {
  public configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes(ImageTypeController);
  }
}
