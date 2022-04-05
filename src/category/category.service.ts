import { Injectable } from '@nestjs/common';
import {
  CreateCategoryDto,
  UpdateCategoryDto,
  FilterCategoryDto,
  Category,
  CategoryRO,
} from './dto/index';
import {} from './dto/update-category.dto';

@Injectable()
export class CategoryService {
  async create(
    userID: number,
    CreateCategoryDto: CreateCategoryDto,
  ): Promise<CategoryRO> {
    const category = {
      id: 1,
      host_id: 1,
      name: 'Pizza',
      item_count: 10,
      item_min_price: 100000,
      item_max_price: 2000000,
    };
    return { category };
  }

  async find(dto: FilterCategoryDto): Promise<Category[]> {
    const category = [];
    category.push({
      id: 1,
      host_id: 1,
      name: 'Pizza',
      item_count: 10,
      item_min_price: 100000,
      item_max_price: 2000000,
    });
    return category;
  }

  async findOne(categoryID: number): Promise<CategoryRO> {
    const category = {
      id: 1,
      host_id: 1,
      name: 'Pizza',
      item_count: 10,
      item_min_price: 100000,
      item_max_price: 2000000,
    };
    return { category };
  }

  async update(
    userID: number,
    categoryID: number,
    UpdateCategoryDto: UpdateCategoryDto,
  ): Promise<CategoryRO> {
    const category = {
      id: 1,
      host_id: 1,
      name: 'Pizza',
      item_count: 10,
      item_min_price: 100000,
      item_max_price: 2000000,
    };
    return { category };
  }

  async delete(userID: number, categoryID: number): Promise<CategoryRO> {
    const category = {
      id: 1,
      host_id: 1,
      name: 'Pizza',
      item_count: 10,
      item_min_price: 100000,
      item_max_price: 2000000,
    };
    return { category };
  }
}
