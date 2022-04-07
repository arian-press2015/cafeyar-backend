import { ApiProperty } from '@nestjs/swagger';

export class CreateUserImageDto {
  @ApiProperty({
    example: 123,
    description: 'user_id of the UserImage',
  })
  readonly user_id: number;

  @ApiProperty({
    example: 640,
    description: 'width in the UserImage',
  })
  readonly width: number;

  @ApiProperty({
    example: 40,
    description: 'height of the UserImage',
  })
  readonly height: number;

  @ApiProperty({
    example: '/here/file.jpg',
    description: 'Url of the UserImage',
  })
  readonly url: string;
}
