import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsPositive, IsString } from 'class-validator';

export class CreateInvoiceDto {
  @IsInt({ message: 'User_id must be a positive number' })
  @IsPositive({ message: 'User_id must be a positive number' })
  @ApiProperty({
    example: 123,
    description: 'user_id of the Invoice',
  })
  readonly user_id: number;

  @IsInt({ message: 'Invalid price' })
  @IsPositive({ message: 'Invalid price' })
  @ApiProperty({
    example: 1000000,
    description: 'total price of the Invoice',
  })
  readonly price: number;

  @IsInt({ message: 'Invalid discount' })
  @IsPositive({ message: 'Invalid discount' })
  @ApiProperty({
    example: '100000',
    description: 'total discount of the Invoice',
  })
  readonly discount: number;

  @IsString({ message: 'Invalid Pay_date' })
  @ApiProperty({
    example: '2022-02-02 20:30:40',
    description: 'pay date',
  })
  readonly pay_date: string;
}
