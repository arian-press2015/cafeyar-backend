import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class UpdateOwnerPermissionDto {
  @IsOptional()
  @IsString({ message: 'Invalid title' })
  @ApiProperty({ example: 'see', description: 'title of the OwnerPermission' })
  readonly title: string;

  @IsOptional()
  @IsString({ message: 'Invalid title_fa' })
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
