import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsOptional, IsPositive } from 'class-validator';

export class FilterInvoiceDto {
  @IsOptional()
  @IsInt({ message: 'Invalid user_id' })
  @IsPositive({ message: 'Invalid user_id' })
  @ApiProperty({
    example: 123,
    description: 'user_id of the Invoice',
  })
  readonly user_id?: number;

  @IsInt({ message: 'Invalid page' })
  @IsPositive({ message: 'Invalid page' })
  @ApiProperty({
    example: 3,
    description: 'page of versions',
  })
  readonly page: number;

  @IsInt({ message: 'Invalid limit' })
  @IsPositive({ message: 'Invalid limit' })
  @ApiProperty({
    example: 10,
    description: 'limit of versions',
  })
  readonly limit: number;
}
