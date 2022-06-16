import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { UserImageService } from './userImage.service';
import { UserImageController } from './userImage.controller';
import { UserModule } from 'src/user/user.module';
import { AuthMiddleware } from 'src/user/auth.middleware';

@Module({
  imports: [UserModule],
  controllers: [UserImageController],
  providers: [UserImageService],
})
export class UserImageModule implements NestModule {
  public configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .exclude(
        { path: 'userImage', method: RequestMethod.GET },
        { path: 'userImage/:id', method: RequestMethod.GET },
      )
      .forRoutes(UserImageController);
  }
}
