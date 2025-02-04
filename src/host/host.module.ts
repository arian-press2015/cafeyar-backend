import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AuthMiddleware } from 'src/user/auth.middleware';
import { UserModule } from 'src/user/user.module';
import { HostController } from './host.controller';
import { HostService } from './host.service';

@Module({
  imports: [UserModule],
  controllers: [HostController],
  providers: [HostService],
  exports: [HostService],
})
export class HostModule implements NestModule {
  public configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes(HostController);
  }
}
