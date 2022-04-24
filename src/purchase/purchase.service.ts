import { Injectable } from '@nestjs/common';
import {
  CreatePurchaseDto,
  UpdatePurchaseDto,
  FilterPurchaseDto,
  Purchase,
  PurchaseRO,
} from './dto/index';

@Injectable()
export class PurchaseService {
  async create(
    userID: number,
    CreatePurchaseDto: CreatePurchaseDto,
  ): Promise<PurchaseRO> {
    const purchase = {
      id: 1,
      payment_id: 1,
      user_id: 1,
      purchase_plan_id: 1,
      purchase_date: '2022-02-02 20:30:40',
    };
    return { purchase };
  }

  async find(dto: FilterPurchaseDto): Promise<Purchase[]> {
    const purchase = [];
    purchase.push({
      id: 1,
      payment_id: 1,
      user_id: 1,
      purchase_plan_id: 1,
      purchase_date: '2022-02-02 20:30:40',
    });
    return purchase;
  }

  async findOne(purchaseID: number): Promise<PurchaseRO> {
    const purchase = {
      id: 1,
      payment_id: 1,
      user_id: 1,
      purchase_plan_id: 1,
      purchase_date: '2022-02-02 20:30:40',
    };
    return { purchase };
  }

  async update(
    userID: number,
    purchaseID: number,
    UpdatePurchaseDto: UpdatePurchaseDto,
  ): Promise<PurchaseRO> {
    const purchase = {
      id: 1,
      payment_id: 1,
      user_id: 1,
      purchase_plan_id: 1,
      purchase_date: '2022-02-02 20:30:40',
    };
    return { purchase };
  }

  async delete(userID: number, purchaseID: number): Promise<PurchaseRO> {
    const purchase = {
      id: 1,
      payment_id: 1,
      user_id: 1,
      purchase_plan_id: 1,
      purchase_date: '2022-02-02 20:30:40',
    };
    return { purchase };
  }
}
