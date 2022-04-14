import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsString } from 'class-validator';

export class UpdateUserFeatureDto {
  @IsString({ message: 'Invalid title' })
  @ApiProperty({ example: 'show sth', description: 'Title of the UserFeature' })
  readonly title: string;

  @IsString({ message: 'Invalid description' })
  @ApiProperty({
    example: 'show something',
    description: 'Description of the UserFeature',
  })
  readonly description: string;

  @IsBoolean({ message: 'Invalid accepted' })
  @ApiProperty({
    example: '03146258582',
    description: 'Accept status the UserFeature',
  })
  readonly accepted: boolean;

  @IsBoolean({ message: 'Invalid paid' })
  @ApiProperty({
    example: '03146258582',
    description: 'Payment status the UserFeature',
  })
  readonly paid: boolean;
}
