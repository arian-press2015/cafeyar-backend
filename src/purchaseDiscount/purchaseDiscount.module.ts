import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { PurchaseDiscountService } from './purchaseDiscount.service';
import { PurchaseDiscountController } from './purchaseDiscount.controller';
import { UserModule } from 'src/user/user.module';
import { AuthMiddleware } from 'src/user/auth.middleware';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [UserModule, ConfigModule],
  controllers: [PurchaseDiscountController],
  providers: [PurchaseDiscountService],
})
export class PurchaseDiscountModule implements NestModule {
  public configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .exclude(
        { path: 'purchaseDiscount', method: RequestMethod.GET },
        { path: 'purchaseDiscount/:id', method: RequestMethod.GET },
      )
      .forRoutes(PurchaseDiscountController);
  }
}
