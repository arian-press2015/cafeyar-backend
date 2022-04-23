import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsOptional, IsPositive, IsString } from 'class-validator';

export class UpdateImageTypeDto {
  @IsOptional()
  @IsString({ message: 'Invalid type' })
  @ApiProperty({ example: 'UserImage', description: 'Image of the User' })
  readonly type?: string;

  @IsOptional()
  @IsString({ message: 'Invalid description' })
  @ApiProperty({
    example: 'this is profile image of Users',
    description: 'description of ImageType',
  })
  readonly description?: string;

  @IsOptional()
  @IsInt({ message: 'Width must be a positive number' })
  @IsPositive({ message: 'Width must be a positive number' })
  @ApiProperty({ example: 640, description: 'width of the Image' })
  readonly width?: number;

  @IsOptional()
  @IsInt({ message: 'Invalid height' })
  @IsPositive({ message: 'Invalid height' })
  @ApiProperty({ example: 480, description: 'height of the Image' })
  readonly height?: number;
}
