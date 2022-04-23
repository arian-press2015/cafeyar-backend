import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsOptional, IsPositive } from 'class-validator';

export class FilterPurchasePlanDto {
  @IsOptional()
  @IsInt({ message: 'Invalid purchase_level_id' })
  @IsPositive({ message: 'Invalid purchase_level_id' })
  @ApiProperty({
    example: 123,
    description: 'purchase_level_id of the PurchasePlan',
  })
  readonly purchase_level_id?: number;

  @IsOptional()
  @IsInt({ message: 'Invalid purchase_lifetime_id' })
  @IsPositive({ message: 'Invalid purchase_lifetime_id' })
  @ApiProperty({
    example: 123,
    description: 'purchase_lifetime_id of the PurchasePlan',
  })
  readonly purchase_lifetime_id?: number;

  @IsInt({ message: 'Page must be a positive number' })
  @IsPositive({ message: 'Page must be a positive number' })
  @ApiProperty({
    example: 3,
    description: 'page of versions',
  })
  readonly page: number;

  @IsInt({ message: 'Limit must be a positive number' })
  @IsPositive({ message: 'Limit must be a positive number' })
  @ApiProperty({
    example: 10,
    description: 'limit of versions',
  })
  readonly limit: number;
}
