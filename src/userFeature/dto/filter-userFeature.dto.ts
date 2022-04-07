import { ApiProperty } from '@nestjs/swagger';

export class FilterUserFeatureDto {
  @ApiProperty({
    example: 123,
    description: 'user_id of the UserFeature',
  })
  readonly user_id: number;
}
