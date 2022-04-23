import { ApiProperty } from '@nestjs/swagger';
import {
  IsDateString,
  IsInt,
  IsOptional,
  IsPositive,
  Max,
  Min,
} from 'class-validator';

export class UpdateSubcategoryDiscountDto {
  @IsOptional()
  @IsInt({ message: 'Count must be a positive number' })
  @IsPositive({ message: 'Count must be a positive number' })
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
  @IsInt({ message: 'Invalid max_amount' })
  @IsPositive({ message: 'Invalid max_amount' })
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
}
