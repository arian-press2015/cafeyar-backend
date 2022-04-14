import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsInt, IsPositive, Max, Min } from 'class-validator';

export class CreateSubcategoryDiscountDto {
  @IsInt({ message: 'Invalid cat_id' })
  @IsPositive({ message: 'Invalid cat_id' })
  @ApiProperty({
    example: 123,
    description: 'category_id of the SubcategoryDiscount',
  })
  readonly cat_id: number;

  @IsInt({ message: 'Invalid sub_cat_id' })
  @IsPositive({ message: 'Invalid sub_cat_id' })
  @ApiProperty({
    example: 123,
    description: 'subcategory_id of the SubcategoryDiscount',
  })
  readonly sub_cat_id: number;

  @IsInt({ message: 'Invalid count' })
  @IsPositive({ message: 'Invalid count' })
  @ApiProperty({
    example: 4,
    description: 'Count of the Discount',
  })
  readonly count: number;

  @IsInt({ message: 'Invalid percentage' })
  @Min(0, { message: 'Invalid percentage' })
  @Max(100, { message: 'Invalid percentage' })
  @ApiProperty({
    example: 30,
    description: 'Discount percentage',
  })
  readonly percentage: number;

  @IsInt({ message: 'Invalid max_amount' })
  @IsPositive({ message: 'Invalid max_amount' })
  @ApiProperty({
    example: 200000,
    description: 'maximum Discount amount',
  })
  readonly max_amount: number;

  @IsDateString({}, { message: 'Invalid expiry_date' })
  @ApiProperty({
    example: '2022-02-02 20:30:40',
    description: 'Discount expiry',
  })
  readonly expiry_date: string;
}
