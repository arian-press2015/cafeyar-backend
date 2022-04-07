import { ApiProperty } from '@nestjs/swagger';

export class Order {
  @ApiProperty({ example: 12345, description: 'ID of the entity in database' })
  readonly id: number;

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

  @ApiProperty({
    example: 2000000,
    description: 'total_price of the Order',
  })
  readonly total_price: number;

  @ApiProperty({
    example: 100000,
    description: 'total_discount of the Order',
  })
  readonly total_discount: number;

  @ApiProperty({
    example: '2020/02/02 10:20:30',
    description: 'Time of the Order',
  })
  readonly time: string;

  @ApiProperty({ example: 'nothing', description: 'description of the Order' })
  readonly description: string;
}

export class OrderRO {
  order: Order;
}
