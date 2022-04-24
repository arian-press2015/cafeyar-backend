import { ApiProperty } from '@nestjs/swagger';
import { Product } from 'src/product/dto';

export class Order {
  @ApiProperty({ example: 12345, description: 'ID of the entity in database' })
  readonly id: number;

  @ApiProperty({
    example: 123,
    description: 'user_id of the Order',
  })
  readonly user_id: number;

  @ApiProperty({
    example: 123,
    description: 'host_id of the Order',
  })
  readonly host_id: number;

  @ApiProperty({
    example: 123,
    description: 'payment_id of the Order',
  })
  readonly payment_id: number;

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
    example: 100000,
    description: 'total_tip of the Order',
  })
  readonly total_tip: number;

  @ApiProperty({
    example: '2022-02-02 20:30:40',
    description: 'Time of the Order',
  })
  readonly time: string;

  @ApiProperty({
    example: '2022-02-02 20:30:40',
    description: 'Pay_date of the Order',
  })
  readonly pay_date?: string;

  @ApiProperty({ example: 'nothing', description: 'description of the Order' })
  readonly description: string;

  @ApiProperty({
    example: [
      {
        product: {
          id: 1,
          sub_cat_id: 1,
          name: 'Pizza',
          price: 100000,
          enabled: true,
          deleted: false,
        },
        count: 2,
      },
    ],
    description: 'products for this Order',
  })
  readonly orderItems: OrderItem[];
}

export class OrderRO {
  order: Order;
}

export class OrderItem {
  @ApiProperty({
    example: {
      id: 1,
      sub_cat_id: 1,
      name: 'Pizza',
      price: 100000,
      enabled: true,
      deleted: false,
    },
    description: 'product of the OrderItem',
  })
  product: Product;
  @ApiProperty({
    example: 1,
    description: 'count of the OrderItem',
  })
  count: number;
}
