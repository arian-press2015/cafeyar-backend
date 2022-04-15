import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsOptional, IsPositive } from 'class-validator';

export class UpdatePurchasePlanDto {
  @IsOptional()
  @IsInt({ message: 'Invalid purchase_level_id' })
  @IsPositive({ message: 'Invalid purchase_level_id' })
  @ApiProperty({
    example: 123,
    description: 'purchase_level_id of the PurchasePlan',
  })
  readonly purchase_level_id: number;

  @IsOptional()
  @IsInt({ message: 'Invalid purchase_lifetime_id' })
  @IsPositive({ message: 'Invalid purchase_lifetime_id' })
  @ApiProperty({
    example: 123,
    description: 'purchase_lifetime_id of the PurchasePlan',
  })
  readonly purchase_lifetime_id: number;

  @IsOptional()
  @IsInt({ message: 'Invalid price' })
  @IsPositive({ message: 'Invalid price' })
  @ApiProperty({
    example: 20000000,
    description: 'Price of the PurchasePlan',
  })
  readonly price: number;
}
