import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsOptional, IsPositive, IsString } from 'class-validator';

export class UpdateImageTypeDto {
  @IsOptional()
  @IsString({ message: 'Type must be a string' })
  @ApiProperty({ example: 'UserImage', description: 'Image of the User' })
  readonly type?: string;

  @IsOptional()
  @IsString({ message: 'Destination must be a string' })
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
  @IsInt({ message: 'Height must be a positive number' })
  @IsPositive({ message: 'Height must be a positive number' })
  @ApiProperty({ example: 480, description: 'height of the Image' })
  readonly height?: number;
}
