import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreatePermissionDto {
  @IsString({ message: 'Title must be a string' })
  @ApiProperty({ example: 'see', description: 'title of the Permission' })
  readonly title: string;

  @IsString({ message: 'Title_fa must be a string' })
  @ApiProperty({
    example: 'دیدن',
    description: 'farsi title of the Permission',
  })
  readonly title_fa: string;

  @IsString({ message: 'Destination must be a string' })
  @ApiProperty({
    example: 'this lets you see',
    description: 'description of the Permission',
  })
  readonly description: string;
}
