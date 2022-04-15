import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsOptional, IsPositive } from 'class-validator';

export class FilterOrderDto {
  @IsOptional()
  @IsInt({ message: 'Invalid host_id' })
  @IsPositive({ message: 'Invalid host_id' })
  @ApiProperty({
    example: 123,
    description: 'host_id of the Order',
  })
  readonly host_id?: number;

  @IsOptional()
  @IsInt({ message: 'Invalid invoice_id' })
  @IsPositive({ message: 'Invalid invoice_id' })
  @ApiProperty({
    example: 123,
    description: 'invoice_id of the Order',
  })
  readonly invoice_id?: number;

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
