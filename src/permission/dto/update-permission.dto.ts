import { ApiProperty } from '@nestjs/swagger';

export class UpdatePermissionDto {
  @ApiProperty({ example: 'see', description: 'title of the Permission' })
  readonly title: string;

  @ApiProperty({
    example: 'دیدن',
    description: 'farsi title of the Permission',
  })
  readonly title_fa: string;

  @ApiProperty({
    example: 'this lets you see',
    description: 'description of the Permission',
  })
  readonly description: string;
}
