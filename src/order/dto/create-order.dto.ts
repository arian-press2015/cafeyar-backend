import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsInt, IsPositive, IsString } from 'class-validator';
import { OrderItem } from './order.dto';

export class CreateOrderDto {
  @IsInt({ message: 'User_id must be a positive number' })
  @IsPositive({ message: 'User_id must be a positive number' })
  @ApiProperty({
    example: 123,
    description: 'user_id of the Order',
  })
  readonly user_id: number;

  @IsInt({ message: 'Host_id must be a positive number' })
  @IsPositive({ message: 'Host_id must be a positive number' })
  @ApiProperty({
    example: 123,
    description: 'host_id of the Order',
  })
  readonly host_id: number;

  @IsInt({ message: 'payment_id must be a positive number' })
  @IsPositive({ message: 'payment_id must be a positive number' })
  @ApiProperty({
    example: 123,
    description: 'payment_id of the Order',
  })
  readonly payment_id: number;

  @IsInt({ message: 'Total_price must be a positive number' })
  @IsPositive({ message: 'Total_price must be a positive number' })
  @ApiProperty({
    example: 2000000,
    description: 'total_price of the Order',
  })
  readonly total_price: number;

  @IsInt({ message: 'Total_discount must be a positive number' })
  @IsPositive({ message: 'Total_discount must be a positive number' })
  @ApiProperty({
    example: 100000,
    description: 'total_discount of the Order',
  })
  readonly total_discount: number;

  @IsInt({ message: 'Total_tip must be a number' })
  @ApiProperty({
    example: 100000,
    description: 'total_tip of the Order',
  })
  readonly total_tip: number;

  @IsDateString({}, { message: 'Invalid time' })
  @ApiProperty({
    example: '2022-02-02 20:30:40',
    description: 'Time of the Order',
  })
  readonly time: string;

  @IsDateString({}, { message: 'Invalid pay_date' })
  @ApiProperty({
    example: '2022-02-02 20:30:40',
    description: 'Pay_date of the Order',
  })
  readonly pay_date?: string;

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
