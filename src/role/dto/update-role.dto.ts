import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsOptional, IsString } from 'class-validator';

export class UpdateRoleDto {
  @IsOptional()
  @IsString({ message: 'Invalid title' })
  @ApiProperty({ example: 'see', description: 'title of the Role' })
  readonly title?: string;

  @IsOptional()
  @IsString({ message: 'Invalid title_fa' })
  @ApiProperty({ example: 'دیدن', description: 'farsi title of the Role' })
  readonly title_fa?: string;

  @IsOptional()
  @IsInt({ each: true, message: 'Invalid permissions' })
  @ApiProperty({
    example: [1, 2],
    description: 'permissions of the Role',
  })
  readonly permission?: number[];
}
