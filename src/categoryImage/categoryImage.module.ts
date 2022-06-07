import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { CategoryImageService } from './categoryImage.service';
import { CategoryImageController } from './categoryImage.controller';
import { UserModule } from 'src/user/user.module';
import { AuthMiddleware } from 'src/user/auth.middleware';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [UserModule, ConfigModule],
  controllers: [CategoryImageController],
  providers: [CategoryImageService],
})
export class CategoryImageModule implements NestModule {
  public configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .exclude(
        { path: 'categoryImage', method: RequestMethod.GET },
        { path: 'categoryImage/:id', method: RequestMethod.GET },
      )
      .forRoutes(CategoryImageController);
  }
}
