import { ApiProperty } from '@nestjs/swagger';

export class FilterSubcategoryDto {
  @ApiProperty({
    example: 123,
    description: 'cat_id of the Category',
  })
  readonly cat_id: number;
}
