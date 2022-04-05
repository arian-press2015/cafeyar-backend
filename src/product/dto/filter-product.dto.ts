import { ApiProperty } from '@nestjs/swagger';

export class FilterProductDto {
  @ApiProperty({
    example: 123,
    description: 'sub_cat_id of the Product',
  })
  readonly sub_cat_id: number;
}
