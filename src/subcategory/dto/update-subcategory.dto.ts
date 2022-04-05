import { ApiProperty } from '@nestjs/swagger';

export class UpdateSubcategoryDto {
  @ApiProperty({
    example: 'Italian coffee',
    description: 'Name of the Subcategory',
  })
  readonly name: string;
}
