import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { PurchaseLifetimeService } from './purchaseLifetime.service';
import { PurchaseLifetimeController } from './purchaseLifetime.controller';
import { UserModule } from 'src/user/user.module';
import { AuthMiddleware } from 'src/user/auth.middleware';

@Module({
  imports: [UserModule],
  controllers: [PurchaseLifetimeController],
  providers: [PurchaseLifetimeService],
})
export class PurchaseLifetimeModule implements NestModule {
  public configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .exclude(
        { path: 'purchaseLifetime', method: RequestMethod.GET },
        { path: 'purchaseLifetime/:id', method: RequestMethod.GET },
      )
      .forRoutes(PurchaseLifetimeController);
  }
}
