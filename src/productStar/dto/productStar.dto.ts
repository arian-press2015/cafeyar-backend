import { ApiProperty } from '@nestjs/swagger';

export class ProductStar {
  @ApiProperty({ example: 12345, description: 'ID of the entity in database' })
  readonly id: number;

  @ApiProperty({
    example: 123,
    description: 'product_id of the ProductStar',
  })
  readonly product_id: number;

  @ApiProperty({
    example: 123,
    description: 'user_id of the ProductStar',
  })
  readonly user_id: number;

  @ApiProperty({
    example: 5,
    description: 'product star',
  })
  readonly star: number;
}

export class ProductStarRO {
  productStar: ProductStar;
}
