import { ApiProperty } from '@nestjs/swagger';

export class UpdateHostImageDto {
  @ApiProperty({
    example: 640,
    description: 'width of the QrImage',
  })
  readonly width: number;

  @ApiProperty({
    example: 480,
    description: 'height of the QrImage',
  })
  readonly height: number;

  @ApiProperty({
    example: '/here/file.jpg',
    description: 'QrImage url',
  })
  readonly url: string;
}
