import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsOptional, IsPositive, IsString } from 'class-validator';

export class UpdateCategoryDto {
  @IsOptional()
  @IsString({ message: 'Name must be a string' })
  @ApiProperty({ example: 'APCafe', description: 'Name of the Category' })
  readonly name?: string;

  @IsOptional()
  @IsInt({ message: 'Item_count must be a positive number' })
  @IsPositive({ message: 'Item_count must be a positive number' })
  @ApiProperty({
    example: '03146258582',
    description: 'number of items in the Category',
  })
  readonly item_count?: number;

  @IsOptional()
  @IsInt({ message: 'Item_min_price must be a positive number' })
  @IsPositive({ message: 'Item_min_price must be a positive number' })
  @ApiProperty({
    example: '100000',
    description: 'minimum item price',
  })
  readonly item_min_price?: number;

  @IsOptional()
  @IsInt({ message: 'Item_max_price must be a positive number' })
  @IsPositive({ message: 'Item_max_price must be a positive number' })
  @ApiProperty({
    example: '2000000',
    description: 'maximum item price',
  })
  readonly item_max_price?: number;
}
