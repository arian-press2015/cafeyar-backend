import { ApiProperty } from '@nestjs/swagger';

export class UpdateImageTypeDto {
  @ApiProperty({ example: 'UserImage', description: 'Image of the User' })
  readonly type: string;

  @ApiProperty({
    example: 'this is profile image of Users',
    description: 'description of ImageType',
  })
  readonly description: string;

  @ApiProperty({ example: 640, description: 'width of the Image' })
  readonly width: number;

  @ApiProperty({ example: 480, description: 'height of the Image' })
  readonly height: number;
}
