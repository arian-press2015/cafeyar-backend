import { ApiProperty } from '@nestjs/swagger';
import { Product } from 'src/product/dto';

export class PurchaseDiscount {
  @ApiProperty({ example: 12345, description: 'ID of the entity in database' })
  readonly id: number;

  @ApiProperty({
    example: 123,
    description: 'purchase plan id of the PurchaseDiscount',
  })
  readonly purchase_plan_id: number;

  @ApiProperty({
    example: 'norouz01',
    description: 'Code of the PurchaseDiscount',
  })
  readonly code?: string;

  @ApiProperty({
    example: 4,
    description: 'Count of the PurchaseDiscount',
  })
  readonly count: number;

  @ApiProperty({
    example: 30,
    description: 'PurchaseDiscount percentage',
  })
  readonly percentage: number;

  @ApiProperty({
    example: 200000,
    description: 'maximum PurchaseDiscount amount',
  })
  readonly max_amount: number;

  @ApiProperty({
    example: '2022-02-02 20:30:40',
    description: 'PurchaseDiscount expiry',
  })
  readonly expiry_date: string;
}

export class PurchaseDiscountRO {
  purchaseDiscount: PurchaseDiscount;
}
