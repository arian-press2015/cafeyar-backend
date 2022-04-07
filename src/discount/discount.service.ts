import { Injectable } from '@nestjs/common';
import {
  CreateDiscountDto,
  UpdateDiscountDto,
  FilterDiscountDto,
  Discount,
  DiscountRO,
} from './dto/index';

@Injectable()
export class DiscountService {
  async create(
    userID: number,
    CreateDiscountDto: CreateDiscountDto,
  ): Promise<DiscountRO> {
    const discount = {
      id: 1,
      code: 'Pizza',
      count: 10,
      percentage: 100000,
      max_amount: 2000000,
      expiry_date: '2022/02/02 20:30:40',
      products: [
        {
          id: 1,
          sub_cat_id: 1,
          name: 'Pizza',
          price: 100000,
          enabled: true,
          deleted: false,
        },
      ],
    };
    return { discount };
  }

  async find(dto: FilterDiscountDto): Promise<Discount[]> {
    const discount = [];
    discount.push({
      id: 1,
      code: 'Pizza',
      count: 10,
      percentage: 100000,
      max_amount: 2000000,
      expiry_date: '2022/02/02 20:30:40',
      products: [
        {
          id: 1,
          sub_cat_id: 1,
          name: 'Pizza',
          price: 100000,
          enabled: true,
          deleted: false,
        },
      ],
    });
    return discount;
  }

  async findOne(discountID: number): Promise<DiscountRO> {
    const discount = {
      id: 1,
      code: 'Pizza',
      count: 10,
      percentage: 100000,
      max_amount: 2000000,
      expiry_date: '2022/02/02 20:30:40',
      products: [
        {
          id: 1,
          sub_cat_id: 1,
          name: 'Pizza',
          price: 100000,
          enabled: true,
          deleted: false,
        },
      ],
    };
    return { discount };
  }

  async update(
    userID: number,
    discountID: number,
    UpdateDiscountDto: UpdateDiscountDto,
  ): Promise<DiscountRO> {
    const discount = {
      id: 1,
      code: 'Pizza',
      count: 10,
      percentage: 100000,
      max_amount: 2000000,
      expiry_date: '2022/02/02 20:30:40',
      products: [
        {
          id: 1,
          sub_cat_id: 1,
          name: 'Pizza',
          price: 100000,
          enabled: true,
          deleted: false,
        },
      ],
    };
    return { discount };
  }

  async delete(userID: number, discountID: number): Promise<DiscountRO> {
    const discount = {
      id: 1,
      code: 'Pizza',
      count: 10,
      percentage: 100000,
      max_amount: 2000000,
      expiry_date: '2022/02/02 20:30:40',
      products: [
        {
          id: 1,
          sub_cat_id: 1,
          name: 'Pizza',
          price: 100000,
          enabled: true,
          deleted: false,
        },
      ],
    };
    return { discount };
  }
}
