import { Injectable } from '@nestjs/common';
import {
  CreateRoleDto,
  UpdateRoleDto,
  FilterRoleDto,
  Role,
  RoleRO,
} from './dto/index';

@Injectable()
export class RoleService {
  async create(userID: number, CreateRoleDto: CreateRoleDto): Promise<RoleRO> {
    const role = {
      id: 1,
      host_id: 1,
      title: 'see',
      title_fa: 'دیدن',
      permissions: [
        {
          id: 1,
          title: 'see',
          title_fa: 'دیدن',
          description: 'something',
        },
      ],
    };
    return { role };
  }

  async find(dto: FilterRoleDto): Promise<Role[]> {
    const role = [];
    role.push({
      id: 1,
      host_id: 1,
      title: 'see',
      title_fa: 'دیدن',
      permissions: [
        {
          id: 1,
          title: 'see',
          title_fa: 'دیدن',
          description: 'something',
        },
      ],
    });
    return role;
  }

  async findOne(roleID: number): Promise<RoleRO> {
    const role = {
      id: 1,
      host_id: 1,
      title: 'see',
      title_fa: 'دیدن',
      permissions: [
        {
          id: 1,
          title: 'see',
          title_fa: 'دیدن',
          description: 'something',
        },
      ],
    };
    return { role };
  }

  async update(
    userID: number,
    roleID: number,
    UpdateRoleDto: UpdateRoleDto,
  ): Promise<RoleRO> {
    const role = {
      id: 1,
      host_id: 1,
      title: 'see',
      title_fa: 'دیدن',
      permissions: [
        {
          id: 1,
          title: 'see',
          title_fa: 'دیدن',
          description: 'something',
        },
      ],
    };
    return { role };
  }

  async delete(userID: number, roleID: number): Promise<RoleRO> {
    const role = {
      id: 1,
      host_id: 1,
      title: 'see',
      title_fa: 'دیدن',
      permissions: [
        {
          id: 1,
          title: 'see',
          title_fa: 'دیدن',
          description: 'something',
        },
      ],
    };
    return { role };
  }
}
