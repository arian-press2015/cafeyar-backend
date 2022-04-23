import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsPositive, IsString } from 'class-validator';

export class CreateQrImageDto {
  @IsInt({ message: 'User_id must be a positive number' })
  @IsPositive({ message: 'User_id must be a positive number' })
  @ApiProperty({
    example: 123,
    description: 'host_table_id of the QrImage',
  })
  readonly host_table_id: number;

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
