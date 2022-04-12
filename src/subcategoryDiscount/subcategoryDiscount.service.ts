import { Injectable } from '@nestjs/common';
import {
  CreateSubcategoryDiscountDto,
  UpdateSubcategoryDiscountDto,
  FilterSubcategoryDiscountDto,
  SubcategoryDiscount,
  SubcategoryDiscountRO,
} from './dto/index';

@Injectable()
export class SubcategoryDiscountService {
  async create(
    userID: number,
    CreateSubcategoryDiscountDto: CreateSubcategoryDiscountDto,
  ): Promise<SubcategoryDiscountRO> {
    const subcategoryDiscount = {
      id: 1,
      cat_id: 1,
      sub_cat_id: 1,
      count: 10,
      percentage: 100000,
      max_amount: 2000000,
      expiry_date: '2022-02-02 20:30:40',
    };
    return { subcategoryDiscount };
  }

  async find(
    dto: FilterSubcategoryDiscountDto,
  ): Promise<SubcategoryDiscount[]> {
    const subcategoryDiscount = [];
    subcategoryDiscount.push({
      id: 1,
      cat_id: 1,
      sub_cat_id: 1,
      count: 10,
      percentage: 100000,
      max_amount: 2000000,
      expiry_date: '2022-02-02 20:30:40',
    });
    return subcategoryDiscount;
  }

  async findOne(subcategoryDiscountID: number): Promise<SubcategoryDiscountRO> {
    const subcategoryDiscount = {
      id: 1,
      cat_id: 1,
      sub_cat_id: 1,
      count: 10,
      percentage: 100000,
      max_amount: 2000000,
      expiry_date: '2022-02-02 20:30:40',
    };
    return { subcategoryDiscount };
  }

  async update(
    userID: number,
    subcategoryDiscountID: number,
    UpdateSubcategoryDiscountDto: UpdateSubcategoryDiscountDto,
  ): Promise<SubcategoryDiscountRO> {
    const subcategoryDiscount = {
      id: 1,
      cat_id: 1,
      sub_cat_id: 1,
      count: 10,
      percentage: 100000,
      max_amount: 2000000,
      expiry_date: '2022-02-02 20:30:40',
    };
    return { subcategoryDiscount };
  }

  async delete(
    userID: number,
    subcategoryDiscountID: number,
  ): Promise<SubcategoryDiscountRO> {
    const subcategoryDiscount = {
      id: 1,
      cat_id: 1,
      sub_cat_id: 1,
      count: 10,
      percentage: 100000,
      max_amount: 2000000,
      expiry_date: '2022-02-02 20:30:40',
    };
    return { subcategoryDiscount };
  }
}
