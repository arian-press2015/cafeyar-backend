import { ApiProperty } from '@nestjs/swagger';

export class Feature {
  @ApiProperty({ example: 12345, description: 'ID of the entity in database' })
  readonly id: number;

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

export class FeatureRO {
  feature: Feature;
}
