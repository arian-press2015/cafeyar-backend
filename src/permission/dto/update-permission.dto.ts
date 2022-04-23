import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class UpdatePermissionDto {
  @IsOptional()
  @IsString({ message: 'Title must be a string' })
  @ApiProperty({ example: 'see', description: 'title of the Permission' })
  readonly title?: string;

  @IsOptional()
  @IsString({ message: 'Title_fa must be a string' })
  @ApiProperty({
    example: 'دیدن',
    description: 'farsi title of the Permission',
  })
  readonly title_fa?: string;

  @IsOptional()
  @IsString({ message: 'Invalid description' })
  @ApiProperty({
    example: 'this lets you see',
    description: 'description of the Permission',
  })
  readonly description?: string;
}
