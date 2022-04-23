import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class UpdateSubcategoryDto {
  @IsOptional()
  @IsString({ message: 'Name must be a string' })
  @ApiProperty({
    example: 'Italian coffee',
    description: 'Name of the Subcategory',
  })
  readonly name?: string;
}
