import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class UpdateOwnerPermissionDto {
  @IsOptional()
  @IsString({ message: 'Title must be a string' })
  @ApiProperty({ example: 'see', description: 'title of the OwnerPermission' })
  readonly title: string;

  @IsOptional()
  @IsString({ message: 'Title_fa must be a string' })
  @ApiProperty({
    example: 'دیدن',
    description: 'farsi title of the OwnerPermission',
  })
  readonly title_fa: string;

  @IsOptional()
  @IsString({ message: 'Invalid description' })
  @ApiProperty({
    example: 'this lets you see',
    description: 'description of the OwnerPermission',
  })
  readonly description: string;
}
