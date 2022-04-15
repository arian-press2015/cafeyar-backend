import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class UpdateSubcategoryDto {
  @IsOptional()
  @IsString({ message: 'Invalid name' })
  @ApiProperty({
    example: 'Italian coffee',
    description: 'Name of the Subcategory',
  })
  readonly name?: string;
}
