import { ApiProperty } from '@nestjs/swagger';
import { OrderItem } from './order.dto';

export class UpdateOrderDto {
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
    example: '2022-02-02 20:30:40',
    description: 'Time of the Order',
  })
  readonly time: string;

  @ApiProperty({ example: 'nothing', description: 'description of the Order' })
  readonly description: string;

  @ApiProperty({
    example: [{ product: 1, count: 2 }],
    description: 'products for this Order',
  })
  readonly orderItem: OrderItem[];
}
