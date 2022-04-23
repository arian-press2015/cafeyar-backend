import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsInt, IsPositive, IsString } from 'class-validator';
import { OrderItem } from './order.dto';

export class CreateOrderDto {
  @IsInt({ message: 'Host_id must be a positive number' })
  @IsPositive({ message: 'Host_id must be a positive number' })
  @ApiProperty({
    example: 123,
    description: 'host_id of the Order',
  })
  readonly host_id: number;

  @IsInt({ message: 'Invoice_id must be a positive number' })
  @IsPositive({ message: 'Invoice_id must be a positive number' })
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

  @IsString({ message: 'Destination must be a string' })
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
