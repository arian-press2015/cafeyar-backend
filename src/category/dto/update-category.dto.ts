import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsOptional, IsPositive, IsString } from 'class-validator';

export class UpdateCategoryDto {
  @IsOptional()
  @IsString({ message: 'Invalid name' })
  @ApiProperty({ example: 'APCafe', description: 'Name of the Category' })
  readonly name?: string;

  @IsOptional()
  @IsInt({ message: 'Invalid item_count' })
  @IsPositive({ message: 'Invalid item_count' })
  @ApiProperty({
    example: '03146258582',
    description: 'number of items in the Category',
  })
  readonly item_count?: number;

  @IsOptional()
  @IsInt({ message: 'Invalid item_min_price' })
  @IsPositive({ message: 'Invalid item_min_price' })
  @ApiProperty({
    example: '100000',
    description: 'minimum item price',
  })
  readonly item_min_price?: number;

  @IsOptional()
  @IsInt({ message: 'Invalid item_max_price' })
  @IsPositive({ message: 'Invalid item_max_price' })
  @ApiProperty({
    example: '2000000',
    description: 'maximum item price',
  })
  readonly item_max_price?: number;
}
