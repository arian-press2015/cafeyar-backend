import { ApiProperty } from '@nestjs/swagger';
import { OwnerPermission } from 'src/ownerPermission/dto';

export class OwnerRole {
  @ApiProperty({ example: 12345, description: 'ID of the entity in database' })
  readonly id: number;

  @ApiProperty({ example: 'see', description: 'title of the OwnerRole' })
  readonly title: string;

  @ApiProperty({ example: 'دیدن', description: 'farsi title of the OwnerRole' })
  readonly title_fa: string;

  @ApiProperty({
    example: [
      {
        id: 1,
        title: 'see',
        title_fa: 'دیدن',
        description: 'something',
      },
    ],
    description: 'permissions of the Role',
  })
  readonly permissions: OwnerPermission[];
}

export class OwnerRoleRO {
  ownerRole: OwnerRole;
}
