import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString } from 'class-validator';

export class CreateUserImageDto {
  @IsInt({ message: 'Invalid user_id' })
  @ApiProperty({
    example: 123,
    description: 'user_id of the UserImage',
  })
  readonly user_id: number;

  @IsInt({ message: 'Invalid width' })
  @ApiProperty({
    example: 640,
    description: 'width in the UserImage',
  })
  readonly width: number;

  @IsInt({ message: 'Invalid height' })
  @ApiProperty({
    example: 40,
    description: 'height of the UserImage',
  })
  readonly height: number;

  @IsString({ message: 'Invalid url' })
  @ApiProperty({
    example: '/here/file.jpg',
    description: 'Url of the UserImage',
  })
  readonly url: string;
}
