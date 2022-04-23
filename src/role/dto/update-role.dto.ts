import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsOptional, IsString } from 'class-validator';

export class UpdateRoleDto {
  @IsOptional()
  @IsString({ message: 'Title must be a string' })
  @ApiProperty({ example: 'see', description: 'title of the Role' })
  readonly title?: string;

  @IsOptional()
  @IsString({ message: 'Title_fa must be a string' })
  @ApiProperty({ example: 'دیدن', description: 'farsi title of the Role' })
  readonly title_fa?: string;

  @IsOptional()
  @IsInt({ each: true, message: 'Permissions must be a positive number' })
  @ApiProperty({
    example: [1, 2],
    description: 'permissions of the Role',
  })
  readonly permission?: number[];
}
