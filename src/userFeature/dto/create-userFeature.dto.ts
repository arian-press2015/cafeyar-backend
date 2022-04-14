import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString } from 'class-validator';

export class CreateUserFeatureDto {
  @IsInt({ message: 'Invalid user_id' })
  @ApiProperty({
    example: 123,
    description: 'user_id of the UserFeature',
  })
  readonly user_id: number;

  @IsString({ message: 'Invalid title' })
  @ApiProperty({ example: 'show sth', description: 'Title of the UserFeature' })
  readonly title: string;

  @IsString({ message: 'Invalid description' })
  @ApiProperty({
    example: 'show something',
    description: 'Description of the UserFeature',
  })
  readonly description: string;
}
