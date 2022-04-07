import { ApiProperty } from '@nestjs/swagger';

export class HostImage {
  @ApiProperty({
    example: 123,
    description: 'host_id of the QrImage',
  })
  readonly host_id: number;

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

export class HostImageRO {
  hostImage: HostImage;
}
