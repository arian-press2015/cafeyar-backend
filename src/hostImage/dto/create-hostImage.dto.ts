import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsPositive, IsString } from 'class-validator';

export class CreateHostImageDto {
  @IsInt({ message: 'Host_id must be a positive number' })
  @IsPositive({ message: 'Host_id must be a positive number' })
  @ApiProperty({
    example: 123,
    description: 'host_id of the QrImage',
  })
  readonly host_id: number;

  @IsInt({ message: 'Width must be a positive number' })
  @IsPositive({ message: 'Width must be a positive number' })
  @ApiProperty({
    example: 640,
    description: 'width of the QrImage',
  })
  readonly width: number;

  @IsInt({ message: 'Height must be a positive number' })
  @IsPositive({ message: 'Height must be a positive number' })
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
