import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsPositive, IsString } from 'class-validator';

export class CreateRoleDto {
  @IsInt({ message: 'Host_id must be a positive number' })
  @IsPositive({ message: 'Host_id must be a positive number' })
  @ApiProperty({
    example: 123,
    description: 'host_id of the Role',
  })
  readonly host_id: number;

  @IsString({ message: 'Title must be a string' })
  @ApiProperty({ example: 'see', description: 'title of the Role' })
  readonly title: string;

  @IsString({ message: 'Title_fa must be a string' })
  @ApiProperty({ example: 'دیدن', description: 'farsi title of the Role' })
  readonly title_fa: string;

  @IsInt({ each: true, message: 'Invalid permissions' })
  @ApiProperty({
    example: [1, 2],
    description: 'permissions of the Role',
  })
  readonly permission: number[];
}
