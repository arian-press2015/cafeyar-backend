import { ApiProperty } from '@nestjs/swagger';

export class UserFeature {
  @ApiProperty({ example: 12345, description: 'ID of the entity in database' })
  readonly id: number;

  @ApiProperty({
    example: 123,
    description: 'user_id of the UserFeature',
  })
  readonly user_id: number;

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

export class UserFeatureRO {
  userFeature: UserFeature;
}
