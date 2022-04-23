import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsOptional, IsPositive, IsString } from 'class-validator';

export class UpdateInvoiceDto {
  @IsOptional()
  @IsInt({ message: 'Price must be a positive number' })
  @IsPositive({ message: 'Price must be a positive number' })
  @ApiProperty({
    example: 1000000,
    description: 'total price of the Invoice',
  })
  readonly price?: number;

  @IsOptional()
  @IsInt({ message: 'Invalid discount' })
  @IsPositive({ message: 'Invalid discount' })
  @ApiProperty({
    example: '100000',
    description: 'total discount of the Invoice',
  })
  readonly discount?: number;

  @IsOptional()
  @IsString({ message: 'Invalid Pay_date' })
  @ApiProperty({
    example: '2022-02-02 20:30:40',
    description: 'pay date',
  })
  readonly pay_date?: string;
}
