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

export class CreatePurchaseDiscountDto {
  @IsInt({ message: 'Purchase_plan_id must be a positive number' })
  @IsPositive({ message: 'Purchase_plan_id must be a positive number' })
  @ApiProperty({
    example: 123,
    description: 'purchase plan id of the PurchaseDiscount',
  })
  readonly purchase_plan_id: number;

  @IsOptional()
  @IsString({ message: 'Invalid code' })
  @ApiProperty({
    example: 'norouz01',
    description: 'Code of the PurchaseDiscount',
  })
  readonly code?: string;

  @IsInt({ message: 'Count must be a positive number' })
  @IsPositive({ message: 'Count must be a positive number' })
  @ApiProperty({
    example: 4,
    description: 'Count of the PurchaseDiscount',
  })
  readonly count: number;

  @IsInt({ message: 'Percentage must be a positive number' })
  @Min(0)
  @Max(100)
  @ApiProperty({
    example: 30,
    description: 'PurchaseDiscount percentage',
  })
  readonly percentage: number;

  @IsInt({ message: 'Max_amount must be a positive number' })
  @IsPositive({ message: 'Max_amount must be a positive number' })
  @ApiProperty({
    example: 200000,
    description: 'maximum PurchaseDiscount amount',
  })
  readonly max_amount: number;

  @IsDateString(
    {},
    {
      message: 'Invalid expiry_date',
    },
  )
  @ApiProperty({
    example: '2022-02-02 20:30:40',
    description: 'PurchaseDiscount expiry',
  })
  readonly expiry_date: string;
}
