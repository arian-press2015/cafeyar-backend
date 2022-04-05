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

@Module({
  imports: [UserModule],
  controllers: [ProductStarController],
  providers: [ProductStarService],
})
export class ProductStarModule implements NestModule {
  public configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .exclude(
        { path: 'productStar', method: RequestMethod.GET },
        { path: 'productStar/:id', method: RequestMethod.GET },
      )
      .forRoutes(ProductStarController);
  }
}
