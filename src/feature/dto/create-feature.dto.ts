import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsPositive, IsString } from 'class-validator';

export class CreateFeatureDto {
  @IsString({ message: 'Title must be a string' })
  @ApiProperty({ example: 'see images', description: 'Title of the Feature' })
  readonly title: string;

  @IsString({ message: 'Destination must be a string' })
  @ApiProperty({
    example: 'show images',
    description: 'description of the Feature',
  })
  readonly description: string;

  @IsInt({ message: 'Invalid version' })
  @IsPositive({ message: 'Invalid version' })
  @ApiProperty({
    example: 123,
    description: 'Version of the Feature',
  })
  readonly version: number;
}
