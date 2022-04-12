import { ApiProperty } from '@nestjs/swagger';

export class CreateDiscountDto {
  @ApiProperty({ example: 'norouz01', description: 'Code of the Discount' })
  readonly code?: string;

  @ApiProperty({
    example: 4,
    description: 'Count of the Discount',
  })
  readonly count: number;

  @ApiProperty({
    example: 30,
    description: 'Discount percentage',
  })
  readonly percentage: number;

  @ApiProperty({
    example: 200000,
    description: 'maximum Discount amount',
  })
  readonly max_amount: number;

  @ApiProperty({
    example: '2022-02-02 20:30:40',
    description: 'Discount expiry',
  })
  readonly expiry_date: string;

  @ApiProperty({
    example: [1, 2],
    description: 'Discounted products',
  })
  readonly products: number[];
}
