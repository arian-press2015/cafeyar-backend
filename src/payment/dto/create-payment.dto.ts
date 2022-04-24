import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsInt, IsPositive } from 'class-validator';

export class CreatePaymentDto {
  @IsInt({ message: 'Price must be a positive number' })
  @IsPositive({ message: 'Price must be a positive number' })
  @ApiProperty({
    example: 20000000,
    description: 'Price of the Payment',
  })
  readonly price: number;

  @IsBoolean({ message: 'Invalid success' })
  @ApiProperty({
    example: true,
    description: 'Success of the Payment',
  })
  readonly success: boolean;
}
