import { ApiProperty } from '@nestjs/swagger';

export class UpdatePurchaseDiscountDto {
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
