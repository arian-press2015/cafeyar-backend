import { Injectable } from '@nestjs/common';
import {
  CreateFeatureDto,
  UpdateFeatureDto,
  FilterFeatureDto,
  Feature,
  FeatureRO,
} from './dto/index';

@Injectable()
export class FeatureService {
  async create(
    userID: number,
    CreateFeatureDto: CreateFeatureDto,
  ): Promise<FeatureRO> {
    const feature = {
      id: 1,
      title: 'Pizza',
      description: 'desc',
      version: 1,
    };
    return { feature };
  }

  async find(dto: FilterFeatureDto): Promise<Feature[]> {
    const feature = [];
    feature.push({
      id: 1,
      title: 'Pizza',
      description: 'desc',
      version: 1,
    });
    return feature;
  }

  async findOne(featureID: number): Promise<FeatureRO> {
    const feature = {
      id: 1,
      title: 'Pizza',
      description: 'desc',
      version: 1,
    };
    return { feature };
  }

  async update(
    userID: number,
    featureID: number,
    UpdateFeatureDto: UpdateFeatureDto,
  ): Promise<FeatureRO> {
    const feature = {
      id: 1,
      title: 'Pizza',
      description: 'desc',
      version: 1,
    };
    return { feature };
  }

  async delete(userID: number, featureID: number): Promise<FeatureRO> {
    const feature = {
      id: 1,
      title: 'Pizza',
      description: 'desc',
      version: 1,
    };
    return { feature };
  }
}
