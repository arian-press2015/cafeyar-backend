import { Injectable } from '@nestjs/common';
import {
  CreatePurchaseDiscountDto,
  UpdatePurchaseDiscountDto,
  FilterPurchaseDiscountDto,
  PurchaseDiscount,
  PurchaseDiscountRO,
} from './dto/index';

@Injectable()
export class PurchaseDiscountService {
  async create(
    userID: number,
    CreatePurchaseDiscountDto: CreatePurchaseDiscountDto,
  ): Promise<PurchaseDiscountRO> {
    const purchaseDiscount = {
      id: 1,
      purchase_plan_id: 1,
      code: 'Pizza',
      count: 10,
      percentage: 100000,
      max_amount: 2000000,
      expiry_date: '2022-02-02 20:30:40',
    };
    return { purchaseDiscount };
  }

  async find(dto: FilterPurchaseDiscountDto): Promise<PurchaseDiscount[]> {
    const purchaseDiscount = [];
    purchaseDiscount.push({
      id: 1,
      purchase_plan_id: 1,
      code: 'Pizza',
      count: 10,
      percentage: 100000,
      max_amount: 2000000,
      expiry_date: '2022-02-02 20:30:40',
    });
    return purchaseDiscount;
  }

  async findOne(purchaseDiscountID: number): Promise<PurchaseDiscountRO> {
    const purchaseDiscount = {
      id: 1,
      purchase_plan_id: 1,
      code: 'Pizza',
      count: 10,
      percentage: 100000,
      max_amount: 2000000,
      expiry_date: '2022-02-02 20:30:40',
    };
    return { purchaseDiscount };
  }

  async update(
    userID: number,
    purchaseDiscountID: number,
    UpdatePurchaseDiscountDto: UpdatePurchaseDiscountDto,
  ): Promise<PurchaseDiscountRO> {
    const purchaseDiscount = {
      id: 1,
      purchase_plan_id: 1,
      code: 'Pizza',
      count: 10,
      percentage: 100000,
      max_amount: 2000000,
      expiry_date: '2022-02-02 20:30:40',
    };
    return { purchaseDiscount };
  }

  async delete(
    userID: number,
    purchaseDiscountID: number,
  ): Promise<PurchaseDiscountRO> {
    const purchaseDiscount = {
      id: 1,
      purchase_plan_id: 1,
      code: 'Pizza',
      count: 10,
      percentage: 100000,
      max_amount: 2000000,
      expiry_date: '2022-02-02 20:30:40',
    };
    return { purchaseDiscount };
  }
}
