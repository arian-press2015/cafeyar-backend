import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsPositive } from 'class-validator';

export class FilterPurchasePlanDto {
  @ApiProperty({
    example: 123,
    description: 'purchase_level_id of the PurchasePlan',
  })
  readonly purchase_level_id: number;

  @ApiProperty({
    example: 123,
    description: 'purchase_lifetime_id of the PurchasePlan',
  })
  readonly purchase_lifetime_id: number;

  @IsInt({ message: 'Invalid page' })
  @IsPositive({ message: 'Invalid page' })
  @ApiProperty({
    example: 3,
    description: 'page of versions',
  })
  readonly page: number;

  @IsInt({ message: 'Invalid limit' })
  @IsPositive({ message: 'Invalid limit' })
  @ApiProperty({
    example: 10,
    description: 'limit of versions',
  })
  readonly limit: number;
}
