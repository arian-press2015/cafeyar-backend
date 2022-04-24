import { Injectable } from '@nestjs/common';
import {
  CreateTipDto,
  UpdateTipDto,
  FilterTipDto,
  Tip,
  TipRO,
} from './dto/index';

@Injectable()
export class TipService {
  async create(userID: number, CreateTipDto: CreateTipDto): Promise<TipRO> {
    const tip = {
      id: 1,
      order_id: 1,
      user_id: 1,
      amount: 1000000,
      count: 5,
      personnels: [
        {
          id: 1,
          user_id: 1,
          host_id: 1,
          role_id: 1,
        },
      ],
    };
    return { tip };
  }

  async find(dto: FilterTipDto): Promise<Tip[]> {
    const tip = [];
    tip.push({
      id: 1,
      order_id: 1,
      user_id: 1,
      amount: 1000000,
      count: 5,
      personnels: [
        {
          id: 1,
          user_id: 1,
          host_id: 1,
          role_id: 1,
        },
      ],
    });
    return tip;
  }

  async findOne(tipID: number): Promise<TipRO> {
    const tip = {
      id: 1,
      order_id: 1,
      user_id: 1,
      amount: 1000000,
      count: 5,
      personnels: [
        {
          id: 1,
          user_id: 1,
          host_id: 1,
          role_id: 1,
        },
      ],
    };
    return { tip };
  }

  async update(
    userID: number,
    tipID: number,
    UpdateTipDto: UpdateTipDto,
  ): Promise<TipRO> {
    const tip = {
      id: 1,
      order_id: 1,
      user_id: 1,
      amount: 1000000,
      count: 5,
      personnels: [
        {
          id: 1,
          user_id: 1,
          host_id: 1,
          role_id: 1,
        },
      ],
    };
    return { tip };
  }

  async delete(userID: number, tipID: number): Promise<TipRO> {
    const tip = {
      id: 1,
      order_id: 1,
      user_id: 1,
      amount: 1000000,
      count: 5,
      personnels: [
        {
          id: 1,
          user_id: 1,
          host_id: 1,
          role_id: 1,
        },
      ],
    };
    return { tip };
  }
}
