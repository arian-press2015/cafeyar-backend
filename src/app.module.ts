import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { UserModule } from './user/user.module';
import { HostModule } from './host/host.module';
import { TableModule } from './table/table.module';
import { ImageTypeModule } from './imageType/imageType.module';
import { CategoryModule } from './category/category.module';
import { SubcategoryModule } from './subcategory/subcategory.module';
import { ProductModule } from './product/product.module';
import { InvoiceModule } from './invoice/invoice.module';
import { FaqModule } from './faq/faq.module';
import { IngredientModule } from './ingredient/ingredient.module';
import { ProductStarModule } from './productStar/productStar.module';
import { ProductImageModule } from './productImage/productImage.module';
import { CategoryImageModule } from './categoryImage/categoryImage.module';
import { QrImageModule } from './qrImage/qrImage.module';
import { HostImageModule } from './hostImage/hostImage.module';
import { FeatureModule } from './feature/feature.module';
import { PurchaseLevelModule } from './purchaseLevel/purchaseLevel.module';
import { PurchasePlanModule } from './purchasePlan/purchasePlan.module';
import { PurchaseLifetimeModule } from './purchaseLifetime/purchaseLifetime.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
    UserModule,
    HostModule,
    TableModule,
    ImageTypeModule,
    CategoryModule,
    SubcategoryModule,
    ProductModule,
    InvoiceModule,
    FaqModule,
    IngredientModule,
    ProductStarModule,
    ProductImageModule,
    CategoryImageModule,
    QrImageModule,
    HostImageModule,
    FeatureModule,
    PurchaseLevelModule,
    PurchasePlanModule,
    PurchaseLifetimeModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
