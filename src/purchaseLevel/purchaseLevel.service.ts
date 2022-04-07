import { Injectable } from '@nestjs/common';
import {
  CreatePurchaseLevelDto,
  UpdatePurchaseLevelDto,
  FilterPurchaseLevelDto,
  PurchaseLevel,
  PurchaseLevelRO,
} from './dto/index';

@Injectable()
export class PurchaseLevelService {
  async create(
    userID: number,
    CreatePurchaseLevelDto: CreatePurchaseLevelDto,
  ): Promise<PurchaseLevelRO> {
    const purchaseLevel = {
      id: 1,
      title: 'basic',
      price: 1000000,
      features: [
        {
          id: 1,
          title: 'Pizza',
          description: 'desc',
          version: 1,
        },
      ],
    };
    return { purchaseLevel };
  }

  async find(dto: FilterPurchaseLevelDto): Promise<PurchaseLevel[]> {
    const purchaseLevel = [];
    purchaseLevel.push({
      id: 1,
      title: 'basic',
      price: 1000000,
      features: [
        {
          id: 1,
          title: 'Pizza',
          description: 'desc',
          version: 1,
        },
      ],
    });
    return purchaseLevel;
  }

  async findOne(purchaseLevelID: number): Promise<PurchaseLevelRO> {
    const purchaseLevel = {
      id: 1,
      title: 'basic',
      price: 1000000,
      features: [
        {
          id: 1,
          title: 'Pizza',
          description: 'desc',
          version: 1,
        },
      ],
    };
    return { purchaseLevel };
  }

  async update(
    userID: number,
    purchaseLevelID: number,
    UpdatePurchaseLevelDto: UpdatePurchaseLevelDto,
  ): Promise<PurchaseLevelRO> {
    const purchaseLevel = {
      id: 1,
      title: 'basic',
      price: 1000000,
      features: [
        {
          id: 1,
          title: 'Pizza',
          description: 'desc',
          version: 1,
        },
      ],
    };
    return { purchaseLevel };
  }

  async delete(
    userID: number,
    purchaseLevelID: number,
  ): Promise<PurchaseLevelRO> {
    const purchaseLevel = {
      id: 1,
      title: 'basic',
      price: 1000000,
      features: [
        {
          id: 1,
          title: 'Pizza',
          description: 'desc',
          version: 1,
        },
      ],
    };
    return { purchaseLevel };
  }
}
