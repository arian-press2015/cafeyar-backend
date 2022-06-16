import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { FaqService } from './faq.service';
import { FaqController } from './faq.controller';
import { UserModule } from 'src/user/user.module';
import { AuthMiddleware } from 'src/user/auth.middleware';

@Module({
  imports: [UserModule],
  controllers: [FaqController],
  providers: [FaqService],
})
export class FaqModule implements NestModule {
  public configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .exclude(
        { path: 'faq', method: RequestMethod.GET },
        { path: 'faq/:id', method: RequestMethod.GET },
      )
      .forRoutes(FaqController);
  }
}
