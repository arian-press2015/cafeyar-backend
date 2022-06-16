import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { CategoryModule } from './category/category.module';
import { CategoryImageModule } from './categoryImage/categoryImage.module';
import configuration from './config/configuration';
import { DiscountModule } from './discount/discount.module';
import { FaqModule } from './faq/faq.module';
import { FeatureModule } from './feature/feature.module';
import { HostModule } from './host/host.module';
import { HostImageModule } from './hostImage/hostImage.module';
import { ImageTypeModule } from './imageType/imageType.module';
import { IngredientModule } from './ingredient/ingredient.module';
import { OrderModule } from './order/order.module';
import { OwnerModule } from './owner/owner.module';
import { OwnerPermissionModule } from './ownerPermission/ownerPermission.module';
import { OwnerRoleModule } from './ownerRole/ownerRole.module';
import { PaymentModule } from './payment/payment.module';
import { PermissionModule } from './permission/permission.module';
import { PersonnelModule } from './personnel/personnel.module';
import { ProductModule } from './product/product.module';
import { ProductImageModule } from './productImage/productImage.module';
import { ProductStarModule } from './productStar/productStar.module';
import { PurchaseModule } from './purchase/purchase.module';
import { PurchaseDiscountModule } from './purchaseDiscount/purchaseDiscount.module';
import { PurchaseLevelModule } from './purchaseLevel/purchaseLevel.module';
import { PurchaseLifetimeModule } from './purchaseLifetime/purchaseLifetime.module';
import { PurchasePlanModule } from './purchasePlan/purchasePlan.module';
import { QrImageModule } from './qrImage/qrImage.module';
import { RateModule } from './rate/rate.module';
import { RoleModule } from './role/role.module';
import { SubcategoryModule } from './subcategory/subcategory.module';
import { SubcategoryDiscountModule } from './subcategoryDiscount/subcategoryDiscount.module';
import { TableModule } from './table/table.module';
import { TipModule } from './tip/tip.module';
import { UserModule } from './user/user.module';
import { UserFeatureModule } from './userFeature/userFeature.module';
import { UserImageModule } from './userImage/userImage.module';
import { VersionModule } from './version/version.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../..', 'public'),
    }),
    ConfigModule.forRoot({
      envFilePath: `${process.cwd()}/.env.${process.env.NODE_ENV}`,
      isGlobal: true,
      load: [configuration],
      cache: true,
    }),
    CategoryModule,
    CategoryImageModule,
    DiscountModule,
    FaqModule,
    FeatureModule,
    HostModule,
    HostImageModule,
    ImageTypeModule,
    IngredientModule,
    OrderModule,
    OwnerModule,
    OwnerPermissionModule,
    OwnerRoleModule,
    PaymentModule,
    PermissionModule,
    PersonnelModule,
    ProductModule,
    ProductImageModule,
    ProductStarModule,
    PurchaseModule,
    PurchaseDiscountModule,
    PurchaseLevelModule,
    PurchaseLifetimeModule,
    PurchasePlanModule,
    QrImageModule,
    RateModule,
    RoleModule,
    SubcategoryModule,
    SubcategoryDiscountModule,
    TableModule,
    TipModule,
    UserModule,
    UserFeatureModule,
    UserImageModule,
    VersionModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
