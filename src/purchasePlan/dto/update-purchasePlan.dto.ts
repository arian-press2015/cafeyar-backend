import { ApiProperty } from '@nestjs/swagger';

export class UpdatePurchasePlanDto {
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

  @ApiProperty({
    example: 20000000,
    description: 'Price of the PurchasePlan',
  })
  readonly price: number;
}
