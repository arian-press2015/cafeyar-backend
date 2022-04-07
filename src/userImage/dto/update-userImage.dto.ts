import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserImageDto {
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
