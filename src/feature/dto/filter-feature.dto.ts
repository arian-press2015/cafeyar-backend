import { ApiProperty } from '@nestjs/swagger';

export class FilterFeatureDto {
  @ApiProperty({
    example: 123,
    description: 'Version of the Feature',
  })
  readonly version: number;
}
