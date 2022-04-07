import { ApiProperty } from '@nestjs/swagger';

export class SubcategoryDiscount {
  @ApiProperty({ example: 12345, description: 'ID of the entity in database' })
  readonly id: number;

  @ApiProperty({
    example: 123,
    description: 'category_id of the SubcategoryDiscount',
  })
  readonly cat_id: number;

  @ApiProperty({
    example: 123,
    description: 'subcategory_id of the SubcategoryDiscount',
  })
  readonly sub_cat_id: number;

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
}

export class SubcategoryDiscountRO {
  subcategoryDiscount: SubcategoryDiscount;
}
