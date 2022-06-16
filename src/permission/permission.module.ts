import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { PermissionService } from './permission.service';
import { PermissionController } from './permission.controller';
import { UserModule } from 'src/user/user.module';
import { AuthMiddleware } from 'src/user/auth.middleware';

@Module({
  imports: [UserModule],
  controllers: [PermissionController],
  providers: [PermissionService],
})
export class PermissionModule implements NestModule {
  public configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .exclude(
        { path: 'permission', method: RequestMethod.GET },
        { path: 'permission/:id', method: RequestMethod.GET },
      )
      .forRoutes(PermissionController);
  }
}
