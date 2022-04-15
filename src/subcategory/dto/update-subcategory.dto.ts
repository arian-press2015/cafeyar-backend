import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class UpdateSubcategoryDto {
  @IsString({ message: 'Invalid name' })
  @ApiProperty({
    example: 'Italian coffee',
    description: 'Name of the Subcategory',
  })
  readonly name: string;
}
