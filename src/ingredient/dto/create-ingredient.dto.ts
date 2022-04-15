import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateIngredientDto {
  @IsString({ message: 'Invalid name' })
  @ApiProperty({ example: 'APCafe', description: 'Name of the Ingredient' })
  readonly name: string;
}
