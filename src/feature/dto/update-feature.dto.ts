import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsOptional, IsPositive, IsString } from 'class-validator';

export class UpdateFeatureDto {
  @IsOptional()
  @IsString({ message: 'Title must be a string' })
  @ApiProperty({ example: 'see images', description: 'Title of the Feature' })
  readonly title?: string;

  @IsOptional()
  @IsString({ message: 'Destination must be a string' })
  @ApiProperty({
    example: 'show images',
    description: 'description of the Feature',
  })
  readonly description?: string;

  @IsOptional()
  @IsInt({ message: 'Version must be a positive number' })
  @IsPositive({ message: 'Version must be a positive number' })
  @ApiProperty({
    example: 123,
    description: 'Version of the Feature',
  })
  readonly version?: number;
}
