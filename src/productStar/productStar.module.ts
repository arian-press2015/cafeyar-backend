import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { ProductStarService } from './productStar.service';
import { ProductStarController } from './productStar.controller';
import { UserModule } from 'src/user/user.module';
import { AuthMiddleware } from 'src/user/auth.middleware';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [UserModule, ConfigModule],
  controllers: [ProductStarController],
  providers: [ProductStarService],
})
export class ProductStarModule implements NestModule {
  public configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .exclude(
        { path: 'product-star', method: RequestMethod.GET },
        { path: 'product-star/:id', method: RequestMethod.GET },
      )
      .forRoutes(ProductStarController);
  }
}
