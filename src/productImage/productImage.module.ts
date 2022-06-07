import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { ProductImageService } from './productImage.service';
import { ProductImageController } from './productImage.controller';
import { UserModule } from 'src/user/user.module';
import { AuthMiddleware } from 'src/user/auth.middleware';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [UserModule, ConfigModule],
  controllers: [ProductImageController],
  providers: [ProductImageService],
})
export class ProductImageModule implements NestModule {
  public configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .exclude(
        { path: 'product-image', method: RequestMethod.GET },
        { path: 'product-image/:id', method: RequestMethod.GET },
      )
      .forRoutes(ProductImageController);
  }
}
