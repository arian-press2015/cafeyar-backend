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

export class UpdateDiscountDto {
  @IsOptional()
  @IsString({ message: 'Invalid code' })
  @ApiProperty({ example: 'norouz01', description: 'Code of the Discount' })
  readonly code?: string;

  @IsOptional()
  @IsInt({ message: 'Count must be a positive number' })
  @IsPositive({ message: 'Invalid couunt' })
  @ApiProperty({
    example: 4,
    description: 'Count of the Discount',
  })
  readonly count?: number;

  @IsOptional()
  @IsInt({ message: 'Percentage must be a positive number' })
  @Min(0, { message: 'Percentage must be a positive number' })
  @Max(100, { message: 'Percentage must be a positive number' })
  @ApiProperty({
    example: 30,
    description: 'Discount percentage',
  })
  readonly percentage?: number;

  @IsOptional()
  @IsInt({ message: 'Max_amount must be a positive number' })
  @IsPositive({ message: 'Max_amount must be a positive number' })
  @ApiProperty({
    example: 200000,
    description: 'maximum Discount amount',
  })
  readonly max_amount?: number;

  @IsOptional()
  @IsDateString({}, { message: 'Invalid expiry_date' })
  @ApiProperty({
    example: '2022-02-02 20:30:40',
    description: 'Discount expiry',
  })
  readonly expiry_date?: string;

  @IsOptional()
  @IsInt({ each: true, message: 'Invalid products' })
  @IsPositive({ each: true, message: 'Invalid products' })
  @ApiProperty({
    example: [1, 2],
    description: 'Discounted products',
  })
  readonly products?: number[];
}
