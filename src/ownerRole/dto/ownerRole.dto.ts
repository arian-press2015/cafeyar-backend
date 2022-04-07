import { ApiProperty } from '@nestjs/swagger';

export class OwnerRole {
  @ApiProperty({ example: 12345, description: 'ID of the entity in database' })
  readonly id: number;

  @ApiProperty({ example: 'see', description: 'title of the OwnerRole' })
  readonly title: string;

  @ApiProperty({ example: 'دیدن', description: 'farsi title of the OwnerRole' })
  readonly title_fa: string;

  @ApiProperty({
    example: [1, 2],
    description: 'permissions of the Role',
  })
  readonly permission: number[];
}

export class OwnerRoleRO {
  ownerRole: OwnerRole;
}
