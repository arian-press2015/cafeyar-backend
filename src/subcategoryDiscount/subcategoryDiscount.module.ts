import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { SubcategoryDiscountService } from './subcategoryDiscount.service';
import { SubcategoryDiscountController } from './subcategoryDiscount.controller';
import { UserModule } from 'src/user/user.module';
import { AuthMiddleware } from 'src/user/auth.middleware';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [UserModule, ConfigModule],
  controllers: [SubcategoryDiscountController],
  providers: [SubcategoryDiscountService],
})
export class SubcategoryDiscountModule implements NestModule {
  public configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .exclude(
        { path: 'subcategoryDiscount', method: RequestMethod.GET },
        { path: 'subcategoryDiscount/:id', method: RequestMethod.GET },
      )
      .forRoutes(SubcategoryDiscountController);
  }
}
