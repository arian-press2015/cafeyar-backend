import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { VersionService } from './version.service';
import { VersionController } from './version.controller';
import { UserModule } from 'src/user/user.module';
import { AuthMiddleware } from 'src/user/auth.middleware';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [UserModule, ConfigModule],
  controllers: [VersionController],
  providers: [VersionService],
})
export class VersionModule implements NestModule {
  public configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .exclude(
        { path: 'version', method: RequestMethod.GET },
        { path: 'version/:id', method: RequestMethod.GET },
      )
      .forRoutes(VersionController);
  }
}
