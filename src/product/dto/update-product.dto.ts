import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsInt,
  IsOptional,
  IsPositive,
  IsString,
} from 'class-validator';

export class UpdateProductDto {
  @IsOptional()
  @IsString({ message: 'Name must be a string' })
  @ApiProperty({ example: 'APCafe', description: 'Name of the Product' })
  readonly name?: string;

  @IsOptional()
  @IsInt({ message: 'Price must be a positive number' })
  @IsPositive({ message: 'Price must be a positive number' })
  @ApiProperty({
    example: '03146258582',
    description: 'price of the Product',
  })
  readonly price?: number;

  @IsOptional()
  @IsBoolean({ message: 'Invalid enable status' })
  @ApiProperty({
    example: true,
    description: 'product enabled',
  })
  readonly enabled?: boolean;

  @IsOptional()
  @IsBoolean({ message: 'Invalid deletion status' })
  @ApiProperty({
    example: false,
    description: 'product deleted',
  })
  readonly deleted?: boolean;

  @IsOptional()
  @IsInt({ each: true, message: 'Ingredients must be a positive number' })
  @IsPositive({ each: true, message: 'Ingredients must be a positive number' })
  @ApiProperty({
    example: [1, 2],
    description: 'product ingredients',
  })
  readonly ingredients?: number[];
}
