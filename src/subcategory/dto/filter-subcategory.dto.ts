import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsOptional, IsPositive } from 'class-validator';

export class FilterSubcategoryDto {
  @IsOptional()
  @IsInt({ message: 'Cat_id must be a positive number' })
  @IsPositive({ message: 'Cat_id must be a positive number' })
  @ApiProperty({
    example: 123,
    description: 'cat_id of the Category',
  })
  readonly cat_id?: number;

  @IsInt({ message: 'Page must be a positive number' })
  @IsPositive({ message: 'Page must be a positive number' })
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
