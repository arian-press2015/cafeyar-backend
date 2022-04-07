import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { PurchasePlanService } from './purchasePlan.service';
import { PurchasePlanController } from './purchasePlan.controller';
import { UserModule } from 'src/user/user.module';
import { AuthMiddleware } from 'src/user/auth.middleware';

@Module({
  imports: [UserModule],
  controllers: [PurchasePlanController],
  providers: [PurchasePlanService],
})
export class PurchasePlanModule implements NestModule {
  public configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .exclude(
        { path: 'purchasePlan', method: RequestMethod.GET },
        { path: 'purchasePlan/:id', method: RequestMethod.GET },
      )
      .forRoutes(PurchasePlanController);
  }
}
