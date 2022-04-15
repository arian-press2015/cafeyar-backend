import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsPositive, IsString } from 'class-validator';

export class CreateQrImageDto {
  @IsInt({ message: 'Invalid user_id' })
  @IsPositive({ message: 'Invalid user_id' })
  @ApiProperty({
    example: 123,
    description: 'host_table_id of the QrImage',
  })
  readonly host_table_id: number;

  @IsInt({ message: 'Invalid width' })
  @IsPositive({ message: 'Invalid width' })
  @ApiProperty({
    example: 640,
    description: 'width of the QrImage',
  })
  readonly width: number;

  @IsInt({ message: 'Invalid height' })
  @IsPositive({ message: 'Invalid height' })
  @ApiProperty({
    example: 480,
    description: 'height of the QrImage',
  })
  readonly height: number;

  @IsString({ message: 'Invalid url' })
  @ApiProperty({
    example: '/here/file.jpg',
    description: 'QrImage url',
  })
  readonly url: string;
}
