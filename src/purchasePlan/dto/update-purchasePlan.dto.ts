import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsOptional, IsPositive } from 'class-validator';

export class UpdatePurchasePlanDto {
  @IsOptional()
  @IsInt({ message: 'Purchase_level_id must be a positive number' })
  @IsPositive({ message: 'Purchase_level_id must be a positive number' })
  @ApiProperty({
    example: 123,
    description: 'purchase_level_id of the PurchasePlan',
  })
  readonly purchase_level_id?: number;

  @IsOptional()
  @IsInt({ message: 'Purchase_lifetime_id must be a positive number' })
  @IsPositive({ message: 'Purchase_lifetime_id must be a positive number' })
  @ApiProperty({
    example: 123,
    description: 'purchase_lifetime_id of the PurchasePlan',
  })
  readonly purchase_lifetime_id?: number;

  @IsOptional()
  @IsInt({ message: 'Price must be a positive number' })
  @IsPositive({ message: 'Price must be a positive number' })
  @ApiProperty({
    example: 20000000,
    description: 'Price of the PurchasePlan',
  })
  readonly price?: number;
}
