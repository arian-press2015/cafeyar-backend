import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { InvoiceService } from './invoice.service';
import { InvoiceController } from './invoice.controller';
import { UserModule } from 'src/user/user.module';
import { AuthMiddleware } from 'src/user/auth.middleware';

@Module({
  imports: [UserModule],
  controllers: [InvoiceController],
  providers: [InvoiceService],
})
export class InvoiceModule implements NestModule {
  public configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .exclude(
        { path: 'invoice', method: RequestMethod.GET },
        { path: 'invoice/:id', method: RequestMethod.GET },
      )
      .forRoutes(InvoiceController);
  }
}
