import { ApiProperty } from '@nestjs/swagger';
import { Product } from 'src/product/dto';

export class Discount {
  @ApiProperty({ example: 12345, description: 'ID of the entity in database' })
  readonly id: number;

  @ApiProperty({ example: 'norouz01', description: 'Code of the Discount' })
  readonly code?: string;

  @ApiProperty({
    example: 4,
    description: 'Count of the Discount',
  })
  readonly count: number;

  @ApiProperty({
    example: 30,
    description: 'Discount percentage',
  })
  readonly percentage: number;

  @ApiProperty({
    example: 200000,
    description: 'maximum Discount amount',
  })
  readonly max_amount: number;

  @ApiProperty({
    example: '2020/02/02 10:20:30',
    description: 'Discount expiry',
  })
  readonly expiry_date: string;

  @ApiProperty({
    example: [
      {
        id: 1,
        sub_cat_id: 1,
        name: 'Pizza',
        price: 100000,
        enabled: true,
        deleted: false,
      },
    ],
    description: 'Discounted products',
  })
  readonly products: Product[];
}

export class DiscountRO {
  discount: Discount;
}
