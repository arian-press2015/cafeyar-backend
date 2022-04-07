import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserFeatureDto {
  @ApiProperty({ example: 'show sth', description: 'Title of the UserFeature' })
  readonly title: string;

  @ApiProperty({
    example: 'show something',
    description: 'Description of the UserFeature',
  })
  readonly description: string;

  @ApiProperty({
    example: '03146258582',
    description: 'Accept status the UserFeature',
  })
  readonly accepted: boolean;

  @ApiProperty({
    example: '03146258582',
    description: 'Payment status the UserFeature',
  })
  readonly paid: boolean;
}
