import { ApiProperty } from '@nestjs/swagger';

export class UpdateOwnerPermissionDto {
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
