import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsInt, IsPositive, IsString } from 'class-validator';

export class CreateProductDto {
  @IsInt({ message: 'Sub_cat_id must be a positive number' })
  @IsPositive({ message: 'Sub_cat_id must be a positive number' })
  @ApiProperty({
    example: 123,
    description: 'sub_cat_id of the Product',
  })
  readonly sub_cat_id: number;

  @IsString({ message: 'Name must be a string' })
  @ApiProperty({ example: 'APCafe', description: 'Name of the Product' })
  readonly name: string;

  @IsInt({ message: 'Price must be a positive number' })
  @IsPositive({ message: 'Price must be a positive number' })
  @ApiProperty({
    example: '03146258582',
    description: 'price of the Product',
  })
  readonly price: number;

  @IsBoolean({ message: 'Invalid enable status' })
  @ApiProperty({
    example: true,
    description: 'product enabled',
  })
  readonly enabled: boolean;

  @IsBoolean({ message: 'Invalid deletion status' })
  @ApiProperty({
    example: false,
    description: 'product deleted',
  })
  readonly deleted: boolean;

  @IsInt({ each: true, message: 'Ingredients must be a positive number' })
  @IsPositive({ each: true, message: 'Ingredients must be a positive number' })
  @ApiProperty({
    example: [1, 2],
    description: 'product ingredients',
  })
  readonly ingredients: number[];
}
