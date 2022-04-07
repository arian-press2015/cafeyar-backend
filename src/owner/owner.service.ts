import { Injectable } from '@nestjs/common';
import {
  CreateOwnerDto,
  UpdateOwnerDto,
  FilterOwnerDto,
  Owner,
  OwnerRO,
} from './dto/index';

@Injectable()
export class OwnerService {
  async create(
    userID: number,
    CreateOwnerDto: CreateOwnerDto,
  ): Promise<OwnerRO> {
    const owner = {
      user_id: 1,
      username: 'Pizza',
      password: 'Pizza',
      owner_role_id: 10,
      creation_date: '2020/02/02 20:20:20',
    };
    return { owner };
  }

  async find(dto: FilterOwnerDto): Promise<Owner[]> {
    const owner = [];
    owner.push({
      user_id: 1,
      username: 'Pizza',
      password: 'Pizza',
      owner_role_id: 10,
      creation_date: '2020/02/02 20:20:20',
    });
    return owner;
  }

  async findOne(ownerID: number): Promise<OwnerRO> {
    const owner = {
      user_id: 1,
      username: 'Pizza',
      password: 'Pizza',
      owner_role_id: 10,
      creation_date: '2020/02/02 20:20:20',
    };
    return { owner };
  }

  async update(
    userID: number,
    ownerID: number,
    UpdateOwnerDto: UpdateOwnerDto,
  ): Promise<OwnerRO> {
    const owner = {
      user_id: 1,
      username: 'Pizza',
      password: 'Pizza',
      owner_role_id: 10,
      creation_date: '2020/02/02 20:20:20',
    };
    return { owner };
  }

  async delete(userID: number, ownerID: number): Promise<OwnerRO> {
    const owner = {
      user_id: 1,
      username: 'Pizza',
      password: 'Pizza',
      owner_role_id: 10,
      creation_date: '2020/02/02 20:20:20',
    };
    return { owner };
  }
}
