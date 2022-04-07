import { ApiProperty } from '@nestjs/swagger';

export class FilterSubcategoryDiscountDto {
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
}
