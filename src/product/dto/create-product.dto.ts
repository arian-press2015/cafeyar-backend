import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsInt, IsPositive, IsString } from 'class-validator';

export class CreateProductDto {
  @IsInt({ message: 'Invalid sub_cat_id' })
  @IsPositive({ message: 'Invalid sub_cat_id' })
  @ApiProperty({
    example: 123,
    description: 'sub_cat_id of the Product',
  })
  readonly sub_cat_id: number;

  @IsString({ message: 'Invalid name' })
  @ApiProperty({ example: 'APCafe', description: 'Name of the Product' })
  readonly name: string;

  @IsInt({ message: 'Invalid price' })
  @IsPositive({ message: 'Invalid price' })
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

  @IsInt({ each: true, message: 'Invalid ingredients' })
  @IsPositive({ each: true, message: 'Invalid ingredients' })
  @ApiProperty({
    example: [1, 2],
    description: 'product ingredients',
  })
  readonly ingredients: number[];
}
