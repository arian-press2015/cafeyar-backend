import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsInt, IsPositive, IsString } from 'class-validator';
import { OrderItem } from './order.dto';

export class CreateOrderDto {
  @IsInt({ message: 'Invalid host_id' })
  @IsPositive({ message: 'Invalid host_id' })
  @ApiProperty({
    example: 123,
    description: 'host_id of the Order',
  })
  readonly host_id: number;

  @IsInt({ message: 'Invalid invoice_id' })
  @IsPositive({ message: 'Invalid invoice_id' })
  @ApiProperty({
    example: 123,
    description: 'invoice_id of the Order',
  })
  readonly invoice_id: number;

  @IsInt({ message: 'Invalid total_price' })
  @IsPositive({ message: 'Invalid total_price' })
  @ApiProperty({
    example: 2000000,
    description: 'total_price of the Order',
  })
  readonly total_price: number;

  @IsInt({ message: 'Invalid total_discount' })
  @IsPositive({ message: 'Invalid total_discount' })
  @ApiProperty({
    example: 100000,
    description: 'total_discount of the Order',
  })
  readonly total_discount: number;

  @IsDateString({}, { message: 'Invalid time' })
  @ApiProperty({
    example: '2022-02-02 20:30:40',
    description: 'Time of the Order',
  })
  readonly time: string;

  @IsString({ message: 'Invalid description' })
  @ApiProperty({ example: 'nothing', description: 'description of the Order' })
  readonly description: string;

  @IsInt({ each: true, message: 'Invalid orderItems' })
  @IsPositive({ each: true, message: 'Invalid orderItems' })
  @ApiProperty({
    example: [{ product: 1, count: 2 }],
    description: 'products for this Order',
  })
  readonly orderItem: OrderItem[];
}
