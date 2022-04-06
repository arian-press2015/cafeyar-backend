import { ApiProperty } from '@nestjs/swagger';

export class UpdateProductImageDto {
  @ApiProperty({
    example: '/here/file.jpg',
    description: 'image url',
  })
  readonly url: string;
}
