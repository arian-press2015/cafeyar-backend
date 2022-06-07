import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { TableService } from './table.service';
import { TableController } from './table.controller';
import { AuthMiddleware } from 'src/user/auth.middleware';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from 'src/user/user.module';

@Module({
  controllers: [TableController],
  providers: [TableService],
  imports: [UserModule, ConfigModule],
})
export class TableModule implements NestModule {
  public configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .exclude(
        { path: 'table', method: RequestMethod.GET },
        { path: 'table/:id', method: RequestMethod.GET },
      )
      .forRoutes(TableController);
  }
}
