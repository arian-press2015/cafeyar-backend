import { Injectable } from '@nestjs/common';
import {
  CreateIngredientDto,
  UpdateIngredientDto,
  FilterIngredientDto,
  Ingredient,
  IngredientRO,
} from './dto/index';
import {} from './dto/update-ingredient.dto';

@Injectable()
export class IngredientService {
  async create(
    userID: number,
    CreateIngredientDto: CreateIngredientDto,
  ): Promise<IngredientRO> {
    const ingredient = {
      id: 1,
      name: 'Noon',
    };
    return { ingredient };
  }

  async find(dto: FilterIngredientDto): Promise<Ingredient[]> {
    const ingredient = [];
    ingredient.push({
      id: 1,
      name: 'Noon',
    });
    return ingredient;
  }

  async findOne(ingredientID: number): Promise<IngredientRO> {
    const ingredient = {
      id: 1,
      name: 'Noon',
    };
    return { ingredient };
  }

  async update(
    userID: number,
    ingredientID: number,
    UpdateIngredientDto: UpdateIngredientDto,
  ): Promise<IngredientRO> {
    const ingredient = {
      id: 1,
      name: 'Noon',
    };
    return { ingredient };
  }

  async delete(userID: number, ingredientID: number): Promise<IngredientRO> {
    const ingredient = {
      id: 1,
      name: 'Noon',
    };
    return { ingredient };
  }
}
