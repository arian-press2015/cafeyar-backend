import { ApiProperty } from '@nestjs/swagger';

export class FilterCategoryDto {
  @ApiProperty({
    example: 123,
    description: 'host_id of the Category',
  })
  readonly host_id: number;
}
