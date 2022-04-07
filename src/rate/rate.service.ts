import { Injectable } from '@nestjs/common';
import {
  CreateRateDto,
  UpdateRateDto,
  FilterRateDto,
  Rate,
  RateRO,
} from './dto/index';

@Injectable()
export class RateService {
  async create(userID: number, CreateRateDto: CreateRateDto): Promise<RateRO> {
    const rate = {
      user_id: 1,
      host_id: 1,
      host_point: 5,
      personnel_point: 5,
      quality_point: 5,
      description: 'it was good',
    };
    return { rate };
  }

  async find(dto: FilterRateDto): Promise<Rate[]> {
    const rate = [];
    rate.push({
      user_id: 1,
      host_id: 1,
      host_point: 5,
      personnel_point: 5,
      quality_point: 5,
      description: 'it was good',
    });
    return rate;
  }

  async findOne(rateID: number): Promise<RateRO> {
    const rate = {
      user_id: 1,
      host_id: 1,
      host_point: 5,
      personnel_point: 5,
      quality_point: 5,
      description: 'it was good',
    };
    return { rate };
  }

  async update(
    userID: number,
    rateID: number,
    UpdateRateDto: UpdateRateDto,
  ): Promise<RateRO> {
    const rate = {
      user_id: 1,
      host_id: 1,
      host_point: 5,
      personnel_point: 5,
      quality_point: 5,
      description: 'it was good',
    };
    return { rate };
  }

  async delete(userID: number, rateID: number): Promise<RateRO> {
    const rate = {
      user_id: 1,
      host_id: 1,
      host_point: 5,
      personnel_point: 5,
      quality_point: 5,
      description: 'it was good',
    };
    return { rate };
  }
}
