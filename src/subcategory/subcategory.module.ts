import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { SubcategoryService } from './subcategory.service';
import { SubcategoryController } from './subcategory.controller';
import { UserModule } from 'src/user/user.module';
import { AuthMiddleware } from 'src/user/auth.middleware';

@Module({
  imports: [UserModule],
  controllers: [SubcategoryController],
  providers: [SubcategoryService],
})
export class SubcategoryModule {
  public configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .exclude(
        { path: 'subcategory', method: RequestMethod.GET },
        { path: 'subcategory/:id', method: RequestMethod.GET },
      )
      .forRoutes(SubcategoryController);
  }
}
