import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString } from 'class-validator';

export class CreateUserFeatureDto {
  @IsInt({ message: 'User_id must be a positive number' })
  @ApiProperty({
    example: 123,
    description: 'user_id of the UserFeature',
  })
  readonly user_id: number;

  @IsString({ message: 'Title must be a string' })
  @ApiProperty({ example: 'show sth', description: 'Title of the UserFeature' })
  readonly title: string;

  @IsString({ message: 'Invalid description' })
  @ApiProperty({
    example: 'show something',
    description: 'Description of the UserFeature',
  })
  readonly description: string;
}
