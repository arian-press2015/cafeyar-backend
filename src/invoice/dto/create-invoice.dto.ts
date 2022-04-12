import { ApiProperty } from '@nestjs/swagger';

export class CreateInvoiceDto {
  @ApiProperty({
    example: 123,
    description: 'customer_id of the Invoice',
  })
  readonly customer_id: number;

  @ApiProperty({
    example: 1000000,
    description: 'total price of the Invoice',
  })
  readonly price: number;

  @ApiProperty({
    example: '100000',
    description: 'total discount of the Invoice',
  })
  readonly discount: number;

  @ApiProperty({
    example: '2022-02-02 20:30:40',
    description: 'pay date',
  })
  readonly pay_date: string;
}
