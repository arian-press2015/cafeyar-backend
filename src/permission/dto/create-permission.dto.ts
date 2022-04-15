import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreatePermissionDto {
  @IsString({ message: 'Invalid title' })
  @ApiProperty({ example: 'see', description: 'title of the Permission' })
  readonly title: string;

  @IsString({ message: 'Invalid title_fa' })
  @ApiProperty({
    example: 'دیدن',
    description: 'farsi title of the Permission',
  })
  readonly title_fa: string;

  @IsString({ message: 'Invalid description' })
  @ApiProperty({
    example: 'this lets you see',
    description: 'description of the Permission',
  })
  readonly description: string;
}
