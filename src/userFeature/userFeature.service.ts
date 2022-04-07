import { Injectable } from '@nestjs/common';
import {
  CreateUserFeatureDto,
  UpdateUserFeatureDto,
  FilterUserFeatureDto,
  UserFeature,
  UserFeatureRO,
} from './dto/index';

@Injectable()
export class UserFeatureService {
  async create(
    userID: number,
    CreateUserFeatureDto: CreateUserFeatureDto,
  ): Promise<UserFeatureRO> {
    const userFeature = {
      id: 1,
      user_id: 1,
      title: 'show sth',
      description: 'show something',
      accepted: false,
      paid: false,
    };
    return { userFeature };
  }

  async find(dto: FilterUserFeatureDto): Promise<UserFeature[]> {
    const userFeature = [];
    userFeature.push({
      id: 1,
      user_id: 1,
      title: 'show sth',
      description: 'show something',
      accepted: false,
      paid: false,
    });
    return userFeature;
  }

  async findOne(userFeatureID: number): Promise<UserFeatureRO> {
    const userFeature = {
      id: 1,
      user_id: 1,
      title: 'show sth',
      description: 'show something',
      accepted: false,
      paid: false,
    };
    return { userFeature };
  }

  async update(
    userID: number,
    userFeatureID: number,
    UpdateUserFeatureDto: UpdateUserFeatureDto,
  ): Promise<UserFeatureRO> {
    const userFeature = {
      id: 1,
      user_id: 1,
      title: 'show sth',
      description: 'show something',
      accepted: false,
      paid: false,
    };
    return { userFeature };
  }

  async delete(userID: number, userFeatureID: number): Promise<UserFeatureRO> {
    const userFeature = {
      id: 1,
      user_id: 1,
      title: 'show sth',
      description: 'show something',
      accepted: false,
      paid: false,
    };
    return { userFeature };
  }
}
