import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsInt, IsPositive, IsString } from 'class-validator';

export class CreateProductImageDto {
  @IsInt({ message: 'Invalid product_id' })
  @IsPositive({ message: 'Invalid product_id' })
  @ApiProperty({
    example: 123,
    description: 'product_id of the ProductImage',
  })
  readonly product_id: number;

  @IsInt({ message: 'Width must be a positive number' })
  @IsPositive({ message: 'Width must be a positive number' })
  @ApiProperty({
    example: 640,
    description: 'image width',
  })
  readonly width: number;

  @IsInt({ message: 'Invalid height' })
  @IsPositive({ message: 'Invalid height' })
  @ApiProperty({
    example: 480,
    description: 'image height',
  })
  readonly height: number;

  @IsString({ message: 'Invalid url' })
  @ApiProperty({
    example: '/here/file.jpg',
    description: 'image url',
  })
  readonly url: string;

  @IsBoolean({ message: 'Invalid image status' })
  @ApiProperty({
    example: true,
    description: 'is it user Image',
  })
  readonly user_image: boolean;
}
