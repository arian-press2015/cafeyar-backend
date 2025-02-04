import { ApiProperty } from '@nestjs/swagger';
import { Ingredient } from 'src/ingredient/dto';

export class Product {
  @ApiProperty({ example: 12345, description: 'ID of the entity in database' })
  readonly id: number;

  @ApiProperty({
    example: 123,
    description: 'sub_cat_id of the Product',
  })
  readonly sub_cat_id: number;

  @ApiProperty({ example: 'APCafe', description: 'Name of the Product' })
  readonly name: string;

  @ApiProperty({
    example: '03146258582',
    description: 'price of the Product',
  })
  readonly price: number;

  @ApiProperty({
    example: true,
    description: 'product enabled',
  })
  readonly enabled: boolean;

  @ApiProperty({
    example: false,
    description: 'product deleted',
  })
  readonly deleted: boolean;

  @ApiProperty({
    example: [
      {
        id: 1,
        name: 'Noon',
      },
    ],
    description: 'product ingredients',
  })
  readonly ingredients?: Ingredient[];
}

export class ProductRO {
  product: Product;
}
