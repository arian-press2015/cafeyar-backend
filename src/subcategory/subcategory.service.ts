import { Injectable } from '@nestjs/common';
import {
  CreateSubcategoryDto,
  UpdateSubcategoryDto,
  FilterSubcategoryDto,
  SubcategoryRO,
  Subcategory,
} from './dto/index';

@Injectable()
export class SubcategoryService {
  async create(
    userID: number,
    CreateSubcategoryDto: CreateSubcategoryDto,
  ): Promise<SubcategoryRO> {
    const subcategory = {
      id: 1,
      cat_id: 1,
      name: 'Pizza',
    };
    return { subcategory };
  }

  async find(dto: FilterSubcategoryDto): Promise<Subcategory[]> {
    const subcategory = [];
    subcategory.push({
      id: 1,
      cat_id: 1,
      name: 'Pizza',
    });
    return subcategory;
  }

  async findOne(subcategoryID: number): Promise<SubcategoryRO> {
    const subcategory = {
      id: 1,
      cat_id: 1,
      name: 'Pizza',
    };
    return { subcategory };
  }

  async update(
    userID: number,
    subcategoryID: number,
    UpdateSubcategoryDto: UpdateSubcategoryDto,
  ): Promise<SubcategoryRO> {
    const subcategory = {
      id: 1,
      cat_id: 1,
      name: 'Pizza',
    };
    return { subcategory };
  }

  async delete(userID: number, subcategoryID: number): Promise<SubcategoryRO> {
    const subcategory = {
      id: 1,
      cat_id: 1,
      name: 'Pizza',
    };
    return { subcategory };
  }
}
