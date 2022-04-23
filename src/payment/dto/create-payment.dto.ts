import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsInt, IsPositive } from 'class-validator';

export class CreatePaymentDto {
  @IsInt({ message: 'Invalid invoice_id' })
  @IsPositive({ message: 'Invalid invoice_id' })
  @ApiProperty({
    example: 123,
    description: 'invoice_id of the Payment',
  })
  readonly invoice_id: number;

  @IsInt({ message: 'Invalid purchase_id' })
  @IsPositive({ message: 'Invalid purchase_id' })
  @ApiProperty({
    example: 123,
    description: 'purchase_id of the Payment',
  })
  readonly purchase_id: number;

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
