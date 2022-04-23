import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsPositive, IsString } from 'class-validator';

export class CreateOwnerRoleDto {
  @IsString({ message: 'Title must be a string' })
  @ApiProperty({ example: 'see', description: 'title of the OwnerRole' })
  readonly title: string;

  @IsString({ message: 'Title_fa must be a string' })
  @ApiProperty({ example: 'دیدن', description: 'farsi title of the OwnerRole' })
  readonly title_fa: string;

  @IsInt({ each: true, message: 'Invalid permissions' })
  @IsPositive({ each: true, message: 'Invalid permissions' })
  @ApiProperty({
    example: [1, 2],
    description: 'permissions of the Role',
  })
  readonly permission: number[];
}
