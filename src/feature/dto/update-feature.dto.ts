import { ApiProperty } from '@nestjs/swagger';

export class UpdateFeatureDto {
  @ApiProperty({ example: 'see images', description: 'Title of the Feature' })
  readonly title: string;

  @ApiProperty({
    example: 'show images',
    description: 'description of the Feature',
  })
  readonly description: string;

  @ApiProperty({
    example: 123,
    description: 'Version of the Feature',
  })
  readonly version: number;
}
