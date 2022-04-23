import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsOptional, IsPositive, IsString } from 'class-validator';

export class UpdateFeatureDto {
  @IsOptional()
  @IsString({ message: 'Title must be a string' })
  @ApiProperty({ example: 'see images', description: 'Title of the Feature' })
  readonly title?: string;

  @IsOptional()
  @IsString({ message: 'Invalid description' })
  @ApiProperty({
    example: 'show images',
    description: 'description of the Feature',
  })
  readonly description?: string;

  @IsOptional()
  @IsInt({ message: 'Invalid version' })
  @IsPositive({ message: 'Invalid version' })
  @ApiProperty({
    example: 123,
    description: 'Version of the Feature',
  })
  readonly version?: number;
}
