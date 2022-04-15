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
  @IsInt({ message: 'Invalid purchase_plan_id' })
  @IsPositive({ message: 'Invalid purchase_plan_id' })
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

  @IsInt({ message: 'Invalid count' })
  @IsPositive({ message: 'Invalid count' })
  @ApiProperty({
    example: 4,
    description: 'Count of the PurchaseDiscount',
  })
  readonly count: number;

  @IsInt({ message: 'Invalid percentage' })
  @Min(0)
  @Max(100)
  @ApiProperty({
    example: 30,
    description: 'PurchaseDiscount percentage',
  })
  readonly percentage: number;

  @IsInt({ message: 'Invalid max_amount' })
  @IsPositive({ message: 'Invalid max_amount' })
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
