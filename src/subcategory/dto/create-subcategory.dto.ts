import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsPositive, IsString } from 'class-validator';

export class CreateSubcategoryDto {
  @IsInt({ message: 'Cat_id must be a positive number' })
  @IsPositive({ message: 'Cat_id must be a positive number' })
  @ApiProperty({
    example: 123,
    description: 'cat_id of the Category',
  })
  readonly cat_id: number;

  @IsString({ message: 'Name must be a string' })
  @ApiProperty({
    example: 'Italian coffee',
    description: 'Name of the Subcategory',
  })
  readonly name: string;
}
