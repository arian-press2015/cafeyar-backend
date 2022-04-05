import { ApiProperty } from '@nestjs/swagger';

export class Invoice {
  @ApiProperty({ example: 12345, description: 'ID of the entity in database' })
  readonly id: number;

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
    example: '2020/02/02 10:20:30',
    description: 'pay date',
  })
  readonly pay_date: string;
}

export class InvoiceRO {
  invoice: Invoice;
}
