import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsOptional, IsPositive } from 'class-validator';

export class FilterProductImageDto {
  @IsOptional()
  @IsInt({ message: 'Invalid product_id' })
  @IsPositive({ message: 'Invalid product_id' })
  @ApiProperty({
    example: 123,
    description: 'product_id of the ProductImage',
  })
  readonly product_id?: number;

  @IsInt({ message: 'Invalid page' })
  @IsPositive({ message: 'Invalid page' })
  @ApiProperty({
    example: 3,
    description: 'page of versions',
  })
  readonly page: number;

  @IsInt({ message: 'Limit must be a positive number' })
  @IsPositive({ message: 'Limit must be a positive number' })
  @ApiProperty({
    example: 10,
    description: 'limit of versions',
  })
  readonly limit: number;
}
