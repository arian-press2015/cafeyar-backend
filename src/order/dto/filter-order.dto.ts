import { ApiProperty } from '@nestjs/swagger';

export class FilterOrderDto {
  @ApiProperty({
    example: 123,
    description: 'host_id of the Order',
  })
  readonly host_id: number;

  @ApiProperty({
    example: 123,
    description: 'invoice_id of the Order',
  })
  readonly invoice_id: number;
}
