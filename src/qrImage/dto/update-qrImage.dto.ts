import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsOptional, IsPositive, IsString } from 'class-validator';

export class UpdateQrImageDto {
  @IsOptional()
  @IsInt({ message: 'Invalid width' })
  @IsPositive({ message: 'Invalid width' })
  @ApiProperty({
    example: 640,
    description: 'width of the QrImage',
  })
  readonly width?: number;

  @IsOptional()
  @IsInt({ message: 'Invalid height' })
  @IsPositive({ message: 'Invalid height' })
  @ApiProperty({
    example: 480,
    description: 'height of the QrImage',
  })
  readonly height?: number;

  @IsOptional()
  @IsString({ message: 'Invalid url' })
  @ApiProperty({
    example: '/here/file.jpg',
    description: 'QrImage url',
  })
  readonly url?: string;
}
