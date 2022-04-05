import { ApiProperty } from '@nestjs/swagger';

export class FilterInvoiceDto {
  @ApiProperty({
    example: 123,
    description: 'customer_id of the Invoice',
  })
  readonly customer_id: number;
}
