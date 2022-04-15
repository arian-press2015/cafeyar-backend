import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class UpdateIngredientDto {
  @IsOptional()
  @IsString({ message: 'Invalid name' })
  @ApiProperty({ example: 'APCafe', description: 'Name of the Ingredient' })
  readonly name?: string;
}
