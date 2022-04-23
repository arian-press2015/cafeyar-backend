import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsOptional, IsPositive, IsString } from 'class-validator';

export class UpdateCategoryImageDto {
  @IsOptional()
  @IsInt({ message: 'Width must be a positive number' })
  @IsPositive({ message: 'Width must be a positive number' })
  @ApiProperty({
    example: 640,
    description: 'width of the CategoryImage',
  })
  readonly width?: number;

  @IsOptional()
  @IsInt({ message: 'Height must be a positive number' })
  @IsPositive({ message: 'Height must be a positive number' })
  @ApiProperty({
    example: 480,
    description: 'height of the CategoryImage',
  })
  readonly height?: number;

  @IsOptional()
  @IsString({ message: 'Invalid url' })
  @ApiProperty({
    example: '/here/file.jpg',
    description: 'Url of the CategoryImage',
  })
  readonly url?: string;
}
