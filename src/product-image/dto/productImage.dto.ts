import { ApiProperty } from '@nestjs/swagger';

export class ProductImage {
  @ApiProperty({ example: 12345, description: 'ID of the entity in database' })
  readonly id: number;

  @ApiProperty({
    example: 123,
    description: 'product_id of the ProductImage',
  })
  readonly product_id: number;

  @ApiProperty({
    example: 640,
    description: 'image width',
  })
  readonly width: number;

  @ApiProperty({
    example: 480,
    description: 'image height',
  })
  readonly height: number;

  @ApiProperty({
    example: '/here/file.jpg',
    description: 'image url',
  })
  readonly url: string;

  @ApiProperty({
    example: true,
    description: 'is it user Image',
  })
  readonly user_image: boolean;
}

export class ProductImageRO {
  productImage: ProductImage;
}
