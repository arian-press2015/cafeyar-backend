import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { OwnerRoleService } from './ownerRole.service';
import { OwnerRoleController } from './ownerRole.controller';
import { UserModule } from 'src/user/user.module';
import { AuthMiddleware } from 'src/user/auth.middleware';

@Module({
  imports: [UserModule],
  controllers: [OwnerRoleController],
  providers: [OwnerRoleService],
})
export class OwnerRoleModule implements NestModule {
  public configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .exclude(
        { path: 'ownerRole', method: RequestMethod.GET },
        { path: 'ownerRole/:id', method: RequestMethod.GET },
      )
      .forRoutes(OwnerRoleController);
  }
}
