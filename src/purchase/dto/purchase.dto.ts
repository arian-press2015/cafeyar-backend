import { ApiProperty } from '@nestjs/swagger';

export class Purchase {
  @ApiProperty({ example: 12345, description: 'ID of the entity in database' })
  readonly id: number;

  @ApiProperty({
    example: 123,
    description: 'user_id of the Purchase',
  })
  readonly user_id: number;

  @ApiProperty({
    example: 123,
    description: 'purchase_plan_id of the Purchase',
  })
  readonly purchase_plan_id: number;

  @ApiProperty({
    example: '2020/02/02 10:20:30',
    description: 'purchase_date of the Purchase',
  })
  readonly purchase_date: string;
}

export class PurchaseRO {
  purchase: Purchase;
}
