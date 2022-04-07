import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { DiscountService } from './discount.service';
import { DiscountController } from './discount.controller';
import { UserModule } from 'src/user/user.module';
import { AuthMiddleware } from 'src/user/auth.middleware';

@Module({
  imports: [UserModule],
  controllers: [DiscountController],
  providers: [DiscountService],
})
export class DiscountModule implements NestModule {
  public configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .exclude(
        { path: 'discount', method: RequestMethod.GET },
        { path: 'discount/:id', method: RequestMethod.GET },
      )
      .forRoutes(DiscountController);
  }
}
