import { ApiProperty } from '@nestjs/swagger';
import {
  IsDateString,
  IsInt,
  IsOptional,
  IsPositive,
  IsString,
} from 'class-validator';
import { OrderItem } from './order.dto';

export class UpdateOrderDto {
  @IsOptional()
  @IsInt({ message: 'Total_price must be a positive number' })
  @IsPositive({ message: 'Total_price must be a positive number' })
  @ApiProperty({
    example: 2000000,
    description: 'total_price of the Order',
  })
  readonly total_price?: number;

  @IsOptional()
  @IsInt({ message: 'Total_discount must be a positive number' })
  @IsPositive({ message: 'Total_discount must be a positive number' })
  @ApiProperty({
    example: 100000,
    description: 'total_discount of the Order',
  })
  readonly total_discount?: number;

  @IsOptional()
  @IsDateString({}, { message: 'Invalid time' })
  @ApiProperty({
    example: '2022-02-02 20:30:40',
    description: 'Time of the Order',
  })
  readonly time?: string;

  @IsOptional()
  @IsString({ message: 'Destination must be a string' })
  @ApiProperty({ example: 'nothing', description: 'description of the Order' })
  readonly description?: string;

  @IsOptional()
  @IsInt({ each: true, message: 'Invalid orderItems' })
  @IsPositive({ each: true, message: 'Invalid orderItems' })
  @ApiProperty({
    example: [{ product: 1, count: 2 }],
    description: 'products for this Order',
  })
  readonly orderItem?: OrderItem[];
}
