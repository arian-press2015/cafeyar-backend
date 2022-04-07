import { ApiProperty } from '@nestjs/swagger';

export class CreatePaymentDto {
  @ApiProperty({
    example: 123,
    description: 'invoice_id of the Payment',
  })
  readonly invoice_id: number;

  @ApiProperty({
    example: 123,
    description: 'purchase_id of the Payment',
  })
  readonly purchase_id: number;

  @ApiProperty({
    example: 20000000,
    description: 'Price of the Payment',
  })
  readonly price: number;

  @ApiProperty({
    example: true,
    description: 'Success of the Payment',
  })
  readonly success: boolean;
}
