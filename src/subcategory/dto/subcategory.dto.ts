import { ApiProperty } from '@nestjs/swagger';

export class Subcategory {
  @ApiProperty({ example: 12345, description: 'ID of the entity in database' })
  readonly id: number;

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

export class SubcategoryRO {
  subcategory: Subcategory;
}
