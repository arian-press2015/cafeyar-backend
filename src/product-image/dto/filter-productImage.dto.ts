import { ApiProperty } from '@nestjs/swagger';

export class FilterProductImageDto {
  @ApiProperty({
    example: 123,
    description: 'product_id of the ProductImage',
  })
  readonly product_id: number;
}
