import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsInt, IsPositive } from 'class-validator';

export class CreatePurchaseDto {
  @IsInt({ message: 'User_id must be a positive number' })
  @IsPositive({ message: 'User_id must be a positive number' })
  @ApiProperty({
    example: 123,
    description: 'user_id of the Purchase',
  })
  readonly user_id: number;

  @IsInt({ message: 'Invalid purchase_plan_id' })
  @IsPositive({ message: 'Invalid purchase_plan_id' })
  @ApiProperty({
    example: 123,
    description: 'purchase_plan_id of the Purchase',
  })
  readonly purchase_plan_id: number;

  @IsDateString({}, { message: 'Invalid purchase_date' })
  @ApiProperty({
    example: '2022-02-02 20:30:40',
    description: 'purchase_date of the Purchase',
  })
  readonly purchase_date: string;
}
