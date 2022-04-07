import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { PurchaseLevelService } from './purchaseLevel.service';
import { PurchaseLevelController } from './purchaseLevel.controller';
import { UserModule } from 'src/user/user.module';
import { AuthMiddleware } from 'src/user/auth.middleware';

@Module({
  imports: [UserModule],
  controllers: [PurchaseLevelController],
  providers: [PurchaseLevelService],
})
export class PurchaseLevelModule implements NestModule {
  public configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .exclude(
        { path: 'purchaseLevel', method: RequestMethod.GET },
        { path: 'purchaseLevel/:id', method: RequestMethod.GET },
      )
      .forRoutes(PurchaseLevelController);
  }
}
