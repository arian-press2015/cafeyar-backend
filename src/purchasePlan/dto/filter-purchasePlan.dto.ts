import { ApiProperty } from '@nestjs/swagger';

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
}
