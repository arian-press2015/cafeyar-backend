import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class UpdateProductImageDto {
  @IsOptional()
  @IsString({ message: 'Invalid url' })
  @ApiProperty({
    example: '/here/file.jpg',
    description: 'image url',
  })
  readonly url?: string;
}
