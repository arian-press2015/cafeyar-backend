import { Injectable } from '@nestjs/common';
import {
  CreateCategoryImageDto,
  UpdateCategoryImageDto,
  CategoryImage,
  CategoryImageRO,
} from './dto/index';

@Injectable()
export class CategoryImageService {
  async create(
    userID: number,
    CreateCategoryImageDto: CreateCategoryImageDto,
  ): Promise<CategoryImageRO> {
    const categoryImage = {
      cat_id: 1,
      width: 640,
      height: 480,
      url: '/pic640480.jpg',
    };
    return { categoryImage };
  }

  async findOne(categoryImageID: number): Promise<CategoryImageRO> {
    const categoryImage = {
      cat_id: 1,
      width: 640,
      height: 480,
      url: '/pic640480.jpg',
    };
    return { categoryImage };
  }

  async update(
    userID: number,
    categoryImageID: number,
    UpdateCategoryImageDto: UpdateCategoryImageDto,
  ): Promise<CategoryImageRO> {
    const categoryImage = {
      cat_id: 1,
      width: 640,
      height: 480,
      url: '/pic640480.jpg',
    };
    return { categoryImage };
  }

  async delete(
    userID: number,
    categoryImageID: number,
  ): Promise<CategoryImageRO> {
    const categoryImage = {
      cat_id: 1,
      width: 640,
      height: 480,
      url: '/pic640480.jpg',
    };
    return { categoryImage };
  }
}
