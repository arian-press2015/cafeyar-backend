import { ApiProperty } from '@nestjs/swagger';

export class CreateOwnerRoleDto {
  @ApiProperty({ example: 'see', description: 'title of the OwnerRole' })
  readonly title: string;

  @ApiProperty({ example: 'دیدن', description: 'farsi title of the OwnerRole' })
  readonly title_fa: string;
}
