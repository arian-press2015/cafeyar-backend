import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateOwnerPermissionDto {
  @IsString({ message: 'Title must be a string' })
  @ApiProperty({ example: 'see', description: 'title of the OwnerPermission' })
  readonly title: string;

  @IsString({ message: 'Title_fa must be a string' })
  @ApiProperty({
    example: 'دیدن',
    description: 'farsi title of the OwnerPermission',
  })
  readonly title_fa: string;

  @IsString({ message: 'Destination must be a string' })
  @ApiProperty({
    example: 'this lets you see',
    description: 'description of the OwnerPermission',
  })
  readonly description: string;
}
