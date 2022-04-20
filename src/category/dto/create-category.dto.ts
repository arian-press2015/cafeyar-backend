import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsPositive, IsString } from 'class-validator';

export class CreateCategoryDto {
  @IsInt({ message: 'Invalid host_id' })
  @IsPositive({ message: 'Invalid host_id' })
  @ApiProperty({
    example: 123,
    description: 'host_id of the Category',
  })
  readonly host_id: number;

  @IsString({ message: 'Invalid name' })
  @ApiProperty({ example: 'APCafe', description: 'Name of the Category' })
  readonly name: string;

  @IsInt({ message: 'Invalid item_count' })
  @IsPositive({ message: 'Invalid item_count' })
  @ApiProperty({
    example: '03146258582',
    description: 'number of items in the Category',
  })
  readonly item_count: number;

  @IsInt({ message: 'Invalid item_min_price' })
  @IsPositive({ message: 'Invalid item_min_price' })
  @ApiProperty({
    example: '100000',
    description: 'minimum item price',
  })
  readonly item_min_price: number;

  @IsInt({ message: 'Invalid item_max_price' })
  @IsPositive({ message: 'Invalid item_max_price' })
  @ApiProperty({
    example: '2000000',
    description: 'maximum item price',
  })
  readonly item_max_price: number;
}
