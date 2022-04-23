import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class UpdateIngredientDto {
  @IsOptional()
  @IsString({ message: 'Name must be a string' })
  @ApiProperty({ example: 'APCafe', description: 'Name of the Ingredient' })
  readonly name?: string;
}
