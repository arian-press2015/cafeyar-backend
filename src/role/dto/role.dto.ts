import { ApiProperty } from '@nestjs/swagger';

export class Role {
  @ApiProperty({ example: 12345, description: 'ID of the entity in database' })
  readonly id: number;

  @ApiProperty({
    example: 123,
    description: 'host_id of the Role',
  })
  readonly host_id: number;

  @ApiProperty({ example: 'see', description: 'title of the Role' })
  readonly title: string;

  @ApiProperty({ example: 'دیدن', description: 'farsi title of the Role' })
  readonly title_fa: string;
}

export class RoleRO {
  role: Role;
}
