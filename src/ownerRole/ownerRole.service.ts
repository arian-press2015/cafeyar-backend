import { Injectable } from '@nestjs/common';
import {
  CreateOwnerRoleDto,
  UpdateOwnerRoleDto,
  FilterOwnerRoleDto,
  OwnerRole,
  OwnerRoleRO,
} from './dto/index';

@Injectable()
export class OwnerRoleService {
  async create(
    userID: number,
    CreateOwnerRoleDto: CreateOwnerRoleDto,
  ): Promise<OwnerRoleRO> {
    const ownerRole = {
      id: 1,
      title: 'see',
      title_fa: 'دیدن',
      permission: [1, 2],
    };
    return { ownerRole };
  }

  async find(dto: FilterOwnerRoleDto): Promise<OwnerRole[]> {
    const ownerRole = [];
    ownerRole.push({
      id: 1,
      title: 'see',
      title_fa: 'دیدن',
      permission: [1, 2],
    });
    return ownerRole;
  }

  async findOne(ownerRoleID: number): Promise<OwnerRoleRO> {
    const ownerRole = {
      id: 1,
      title: 'see',
      title_fa: 'دیدن',
      permission: [1, 2],
    };
    return { ownerRole };
  }

  async update(
    userID: number,
    ownerRoleID: number,
    UpdateOwnerRoleDto: UpdateOwnerRoleDto,
  ): Promise<OwnerRoleRO> {
    const ownerRole = {
      id: 1,
      title: 'see',
      title_fa: 'دیدن',
      permission: [1, 2],
    };
    return { ownerRole };
  }

  async delete(userID: number, ownerRoleID: number): Promise<OwnerRoleRO> {
    const ownerRole = {
      id: 1,
      title: 'see',
      title_fa: 'دیدن',
      permission: [1, 2],
    };
    return { ownerRole };
  }
}
