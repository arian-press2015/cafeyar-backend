import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsPositive } from 'class-validator';

export class FilterOrderDto {
  @ApiProperty({
    example: 123,
    description: 'host_id of the Order',
  })
  readonly host_id: number;

  @ApiProperty({
    example: 123,
    description: 'invoice_id of the Order',
  })
  readonly invoice_id: number;

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
