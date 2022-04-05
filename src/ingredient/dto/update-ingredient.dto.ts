import { ApiProperty } from '@nestjs/swagger';

export class UpdateIngredientDto {
  @ApiProperty({ example: 'APCafe', description: 'Name of the Ingredient' })
  readonly name: string;
}
