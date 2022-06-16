import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { RoleService } from './role.service';
import { RoleController } from './role.controller';
import { UserModule } from 'src/user/user.module';
import { AuthMiddleware } from 'src/user/auth.middleware';

@Module({
  imports: [UserModule],
  controllers: [RoleController],
  providers: [RoleService],
})
export class RoleModule implements NestModule {
  public configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .exclude(
        { path: 'role', method: RequestMethod.GET },
        { path: 'role/:id', method: RequestMethod.GET },
      )
      .forRoutes(RoleController);
  }
}
