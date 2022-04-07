import { Injectable } from '@nestjs/common';
import {
  CreateOwnerPermissionDto,
  UpdateOwnerPermissionDto,
  FilterOwnerPermissionDto,
  OwnerPermission,
  OwnerPermissionRO,
} from './dto/index';

@Injectable()
export class OwnerPermissionService {
  async create(
    userID: number,
    CreateOwnerPermissionDto: CreateOwnerPermissionDto,
  ): Promise<OwnerPermissionRO> {
    const ownerPermission = {
      id: 1,
      title: 'see',
      title_fa: 'دیدن',
      description: 'something',
    };
    return { ownerPermission };
  }

  async find(dto: FilterOwnerPermissionDto): Promise<OwnerPermission[]> {
    const ownerPermission = [];
    ownerPermission.push({
      id: 1,
      title: 'see',
      title_fa: 'دیدن',
      description: 'something',
    });
    return ownerPermission;
  }

  async findOne(ownerPermissionID: number): Promise<OwnerPermissionRO> {
    const ownerPermission = {
      id: 1,
      title: 'see',
      title_fa: 'دیدن',
      description: 'something',
    };
    return { ownerPermission };
  }

  async update(
    userID: number,
    ownerPermissionID: number,
    UpdateOwnerPermissionDto: UpdateOwnerPermissionDto,
  ): Promise<OwnerPermissionRO> {
    const ownerPermission = {
      id: 1,
      title: 'see',
      title_fa: 'دیدن',
      description: 'something',
    };
    return { ownerPermission };
  }

  async delete(userID: number, ownerPermissionID: number): Promise<OwnerPermissionRO> {
    const ownerPermission = {
      id: 1,
      title: 'see',
      title_fa: 'دیدن',
      description: 'something',
    };
    return { ownerPermission };
  }
}
