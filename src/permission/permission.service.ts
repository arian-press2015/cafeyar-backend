import { Injectable } from '@nestjs/common';
import {
  CreatePermissionDto,
  UpdatePermissionDto,
  FilterPermissionDto,
  Permission,
  PermissionRO,
} from './dto/index';

@Injectable()
export class PermissionService {
  async create(
    userID: number,
    CreatePermissionDto: CreatePermissionDto,
  ): Promise<PermissionRO> {
    const permission = {
      id: 1,
      title: 'see',
      title_fa: 'دیدن',
      description: 'something',
    };
    return { permission };
  }

  async find(dto: FilterPermissionDto): Promise<Permission[]> {
    const permission = [];
    permission.push({
      id: 1,
      title: 'see',
      title_fa: 'دیدن',
      description: 'something',
    });
    return permission;
  }

  async findOne(permissionID: number): Promise<PermissionRO> {
    const permission = {
      id: 1,
      title: 'see',
      title_fa: 'دیدن',
      description: 'something',
    };
    return { permission };
  }

  async update(
    userID: number,
    permissionID: number,
    UpdatePermissionDto: UpdatePermissionDto,
  ): Promise<PermissionRO> {
    const permission = {
      id: 1,
      title: 'see',
      title_fa: 'دیدن',
      description: 'something',
    };
    return { permission };
  }

  async delete(userID: number, permissionID: number): Promise<PermissionRO> {
    const permission = {
      id: 1,
      title: 'see',
      title_fa: 'دیدن',
      description: 'something',
    };
    return { permission };
  }
}
