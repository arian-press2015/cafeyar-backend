import { ApiProperty } from '@nestjs/swagger';
import {
  IsDateString,
  IsInt,
  IsOptional,
  IsPositive,
  IsString,
  Max,
  Min,
} from 'class-validator';

export class CreateDiscountDto {
  @IsOptional()
  @IsString({ message: 'Invalid code' })
  @ApiProperty({ example: 'norouz01', description: 'Code of the Discount' })
  readonly code?: string;

  @IsInt({ message: 'Invalid count' })
  @IsPositive({ message: 'Invalid couunt' })
  @ApiProperty({
    example: 4,
    description: 'Count of the Discount',
  })
  readonly count: number;

  @IsInt({ message: 'Invalid percentage' })
  @Min(0, { message: 'Invalid percentage' })
  @Max(100, { message: 'Invalid percentage' })
  @ApiProperty({
    example: 30,
    description: 'Discount percentage',
  })
  readonly percentage: number;

  @IsInt({ message: 'Invalid max_amount' })
  @IsPositive({ message: 'Invalid max_amount' })
  @ApiProperty({
    example: 200000,
    description: 'maximum Discount amount',
  })
  readonly max_amount: number;

  @IsDateString({}, { message: 'Invalid expiry_date' })
  @ApiProperty({
    example: '2022-02-02 20:30:40',
    description: 'Discount expiry',
  })
  readonly expiry_date: string;

  @IsInt({ each: true, message: 'Invalid products' })
  @IsPositive({ each: true, message: 'Invalid products' })
  @ApiProperty({
    example: [1, 2],
    description: 'Discounted products',
  })
  readonly products: number[];
}
