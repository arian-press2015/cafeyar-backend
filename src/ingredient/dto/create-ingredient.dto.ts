import { ApiProperty } from '@nestjs/swagger';

export class CreateIngredientDto {
  @ApiProperty({ example: 'APCafe', description: 'Name of the Ingredient' })
  readonly name: string;
}
