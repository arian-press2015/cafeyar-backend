import { ApiProperty } from '@nestjs/swagger';

export class UpdateRoleDto {
  @ApiProperty({ example: 'see', description: 'title of the Role' })
  readonly title: string;

  @ApiProperty({ example: 'دیدن', description: 'farsi title of the Role' })
  readonly title_fa: string;

  @ApiProperty({
    example: [1, 2],
    description: 'permissions of the Role',
  })
  readonly permission: number[];
}
