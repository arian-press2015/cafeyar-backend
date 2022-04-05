import { ApiProperty } from '@nestjs/swagger';

export class CreateSubcategoryDto {
  @ApiProperty({
    example: 123,
    description: 'cat_id of the Category',
  })
  readonly cat_id: number;

  @ApiProperty({
    example: 'Italian coffee',
    description: 'Name of the Subcategory',
  })
  readonly name: string;
}
