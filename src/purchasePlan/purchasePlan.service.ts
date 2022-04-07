import { Injectable } from '@nestjs/common';
import {
  CreatePurchasePlanDto,
  UpdatePurchasePlanDto,
  FilterPurchasePlanDto,
  PurchasePlan,
  PurchasePlanRO,
} from './dto/index';

@Injectable()
export class PurchasePlanService {
  async create(
    userID: number,
    CreatePurchasePlanDto: CreatePurchasePlanDto,
  ): Promise<PurchasePlanRO> {
    const purchasePlan = {
      id: 1,
      purchase_level_id: 1,
      purchase_lifetime_id: 1,
      price: 1000000,
    };
    return { purchasePlan };
  }

  async find(dto: FilterPurchasePlanDto): Promise<PurchasePlan[]> {
    const purchasePlan = [];
    purchasePlan.push({
      id: 1,
      purchase_level_id: 1,
      purchase_lifetime_id: 1,
      price: 1000000,
    });
    return purchasePlan;
  }

  async findOne(purchasePlanID: number): Promise<PurchasePlanRO> {
    const purchasePlan = {
      id: 1,
      purchase_level_id: 1,
      purchase_lifetime_id: 1,
      price: 1000000,
    };
    return { purchasePlan };
  }

  async update(
    userID: number,
    purchasePlanID: number,
    UpdatePurchasePlanDto: UpdatePurchasePlanDto,
  ): Promise<PurchasePlanRO> {
    const purchasePlan = {
      id: 1,
      purchase_level_id: 1,
      purchase_lifetime_id: 1,
      price: 1000000,
    };
    return { purchasePlan };
  }

  async delete(
    userID: number,
    purchasePlanID: number,
  ): Promise<PurchasePlanRO> {
    const purchasePlan = {
      id: 1,
      purchase_level_id: 1,
      purchase_lifetime_id: 1,
      price: 1000000,
    };
    return { purchasePlan };
  }
}
