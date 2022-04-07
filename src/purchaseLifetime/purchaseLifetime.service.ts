import { Injectable } from '@nestjs/common';
import {
  CreatePurchaseLifetimeDto,
  UpdatePurchaseLifetimeDto,
  FilterPurchaseLifetimeDto,
  PurchaseLifetime,
  PurchaseLifetimeRO,
} from './dto/index';

@Injectable()
export class PurchaseLifetimeService {
  async create(
    userID: number,
    CreatePurchaseLifetimeDto: CreatePurchaseLifetimeDto,
  ): Promise<PurchaseLifetimeRO> {
    const purchaseLifetime = {
      id: 1,
      title: 'monthly',
      description: 'purchase for a month',
      multiplier: 1,
    };
    return { purchaseLifetime };
  }

  async find(dto: FilterPurchaseLifetimeDto): Promise<PurchaseLifetime[]> {
    const purchaseLifetime = [];
    purchaseLifetime.push({
      id: 1,
      title: 'monthly',
      description: 'purchase for a month',
      multiplier: 1,
    });
    return purchaseLifetime;
  }

  async findOne(purchaseLifetimeID: number): Promise<PurchaseLifetimeRO> {
    const purchaseLifetime = {
      id: 1,
      title: 'monthly',
      description: 'purchase for a month',
      multiplier: 1,
    };
    return { purchaseLifetime };
  }

  async update(
    userID: number,
    purchaseLifetimeID: number,
    UpdatePurchaseLifetimeDto: UpdatePurchaseLifetimeDto,
  ): Promise<PurchaseLifetimeRO> {
    const purchaseLifetime = {
      id: 1,
      title: 'monthly',
      description: 'purchase for a month',
      multiplier: 1,
    };
    return { purchaseLifetime };
  }

  async delete(
    userID: number,
    purchaseLifetimeID: number,
  ): Promise<PurchaseLifetimeRO> {
    const purchaseLifetime = {
      id: 1,
      title: 'monthly',
      description: 'purchase for a month',
      multiplier: 1,
    };
    return { purchaseLifetime };
  }
}
