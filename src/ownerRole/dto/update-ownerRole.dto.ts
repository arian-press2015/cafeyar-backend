import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsOptional, IsPositive, IsString } from 'class-validator';

export class UpdateOwnerRoleDto {
  @IsOptional()
  @IsString({ message: 'Title must be a string' })
  @ApiProperty({ example: 'see', description: 'title of the OwnerRole' })
  readonly title?: string;

  @IsOptional()
  @IsString({ message: 'Title_fa must be a string' })
  @ApiProperty({ example: 'دیدن', description: 'farsi title of the OwnerRole' })
  readonly title_fa?: string;

  @IsOptional()
  @IsInt({ each: true, message: 'Permissions must be a positive number' })
  @IsPositive({ each: true, message: 'Permissions must be a positive number' })
  @ApiProperty({
    example: [1, 2],
    description: 'permissions of the Role',
  })
  readonly permission?: number[];
}
