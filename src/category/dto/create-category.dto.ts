import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsPositive, IsString } from 'class-validator';

export class CreateCategoryDto {
  @IsInt({ message: 'Host_id must be a positive number' })
  @IsPositive({ message: 'Host_id must be a positive number' })
  @ApiProperty({
    example: 123,
    description: 'host_id of the Category',
  })
  readonly host_id: number;

  @IsString({ message: 'Name must be a string' })
  @ApiProperty({ example: 'APCafe', description: 'Name of the Category' })
  readonly name: string;

  @IsInt({ message: 'Item_count must be a positive number' })
  @IsPositive({ message: 'Item_count must be a positive number' })
  @ApiProperty({
    example: '03146258582',
    description: 'number of items in the Category',
  })
  readonly item_count: number;

  @IsInt({ message: 'Item_min_price must be a positive number' })
  @IsPositive({ message: 'Item_min_price must be a positive number' })
  @ApiProperty({
    example: '100000',
    description: 'minimum item price',
  })
  readonly item_min_price: number;

  @IsInt({ message: 'Item_max_price must be a positive number' })
  @IsPositive({ message: 'Item_max_price must be a positive number' })
  @ApiProperty({
    example: '2000000',
    description: 'maximum item price',
  })
  readonly item_max_price: number;
}
