import { ApiProperty } from '@nestjs/swagger';

export class UpdateCategoryDto {
  @ApiProperty({ example: 'APCafe', description: 'Name of the Category' })
  readonly name: string;

  @ApiProperty({
    example: '03146258582',
    description: 'number of items in the Category',
  })
  readonly item_count: number;

  @ApiProperty({
    example: '100000',
    description: 'minimum item price',
  })
  readonly item_min_price: number;

  @ApiProperty({
    example: '2000000',
    description: 'maximum item price',
  })
  readonly item_max_price: number;
}
