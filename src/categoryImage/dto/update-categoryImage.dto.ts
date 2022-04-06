import { ApiProperty } from '@nestjs/swagger';

export class UpdateCategoryImageDto {
  @ApiProperty({
    example: 640,
    description: 'width of the CategoryImage',
  })
  readonly width: number;

  @ApiProperty({
    example: 480,
    description: 'height of the CategoryImage',
  })
  readonly height: number;

  @ApiProperty({
    example: '/here/file.jpg',
    description: 'Url of the CategoryImage',
  })
  readonly url: string;
}
