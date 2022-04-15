import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsPositive, IsString } from 'class-validator';

export class CreateSubcategoryDto {
  @IsInt({ message: 'Invalid cat_id' })
  @IsPositive({ message: 'Invalid cat_id' })
  @ApiProperty({
    example: 123,
    description: 'cat_id of the Category',
  })
  readonly cat_id: number;

  @IsString({ message: 'Invalid name' })
  @ApiProperty({
    example: 'Italian coffee',
    description: 'Name of the Subcategory',
  })
  readonly name: string;
}
