import { ApiProperty } from '@nestjs/swagger';

export class UpdateDiscountDto {
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
    example: '2020/02/02 10:20:30',
    description: 'Discount expiry',
  })
  readonly expiry_date: string;
}
