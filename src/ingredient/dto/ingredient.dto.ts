import { ApiProperty } from '@nestjs/swagger';

export class Ingredient {
  @ApiProperty({ example: 12345, description: 'ID of the entity in database' })
  readonly id: number;

  @ApiProperty({ example: 'APCafe', description: 'Name of the Ingredient' })
  readonly name: string;
}

export class IngredientRO {
  ingredient: Ingredient;
}
