import { ApiProperty } from '@nestjs/swagger';

export class OwnerPermission {
  @ApiProperty({ example: 12345, description: 'ID of the entity in database' })
  readonly id: number;

  @ApiProperty({ example: 'see', description: 'title of the OwnerPermission' })
  readonly title: string;

  @ApiProperty({
    example: 'دیدن',
    description: 'farsi title of the OwnerPermission',
  })
  readonly title_fa: string;

  @ApiProperty({
    example: 'this lets you see',
    description: 'description of the OwnerPermission',
  })
  readonly description: string;
}

export class OwnerPermissionRO {
  ownerPermission: OwnerPermission;
}
