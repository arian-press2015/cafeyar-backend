import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { OwnerPermissionService } from './ownerPermission.service';
import { OwnerPermissionController } from './ownerPermission.controller';
import { UserModule } from 'src/user/user.module';
import { AuthMiddleware } from 'src/user/auth.middleware';

@Module({
  imports: [UserModule],
  controllers: [OwnerPermissionController],
  providers: [OwnerPermissionService],
})
export class OwnerPermissionModule implements NestModule {
  public configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .exclude(
        { path: 'ownerPermission', method: RequestMethod.GET },
        { path: 'ownerPermission/:id', method: RequestMethod.GET },
      )
      .forRoutes(OwnerPermissionController);
  }
}
