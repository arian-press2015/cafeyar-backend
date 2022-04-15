import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsOptional, IsPositive } from 'class-validator';

export class FilterProductDto {
  @IsOptional()
  @IsInt({ message: 'Invalid sub_cat_id' })
  @IsPositive({ message: 'Invalid sub_cat_id' })
  @ApiProperty({
    example: 123,
    description: 'sub_cat_id of the Product',
  })
  readonly sub_cat_id?: number;

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
