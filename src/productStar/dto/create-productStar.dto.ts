import { ApiProperty } from '@nestjs/swagger';

export class CreateProductStarDto {
  @ApiProperty({
    example: 123,
    description: 'product_id of the ProductStar',
  })
  readonly product_id: number;

  @ApiProperty({
    example: 123,
    description: 'customer_id of the ProductStar',
  })
  readonly customer_id: number;

  @ApiProperty({
    example: 5,
    description: 'product star',
  })
  readonly star: number;
}
