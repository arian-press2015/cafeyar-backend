import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsOptional, IsString } from 'class-validator';

export class UpdateUserImageDto {
  @IsOptional()
  @IsInt({ message: 'Width must be a positive number' })
  @ApiProperty({
    example: 640,
    description: 'width in the UserImage',
  })
  readonly width?: number;

  @IsOptional()
  @IsInt({ message: 'Height must be a positive number' })
  @ApiProperty({
    example: 40,
    description: 'height of the UserImage',
  })
  readonly height?: number;

  @IsOptional()
  @IsString({ message: 'Invalid url' })
  @ApiProperty({
    example: '/here/file.jpg',
    description: 'Url of the UserImage',
  })
  readonly url?: string;
}
