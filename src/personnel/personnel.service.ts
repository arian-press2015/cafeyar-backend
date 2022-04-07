import { Injectable } from '@nestjs/common';
import {
  CreatePersonnelDto,
  UpdatePersonnelDto,
  FilterPersonnelDto,
  Personnel,
  PersonnelRO,
} from './dto/index';

@Injectable()
export class PersonnelService {
  async create(
    userID: number,
    CreatePersonnelDto: CreatePersonnelDto,
  ): Promise<PersonnelRO> {
    const personnel = {
      id: 1,
      user_id: 1,
      host_id: 1,
      role_id: 1,
    };
    return { personnel };
  }

  async find(dto: FilterPersonnelDto): Promise<Personnel[]> {
    const personnel = [];
    personnel.push({
      id: 1,
      user_id: 1,
      host_id: 1,
      role_id: 1,
    });
    return personnel;
  }

  async findOne(personnelID: number): Promise<PersonnelRO> {
    const personnel = {
      id: 1,
      user_id: 1,
      host_id: 1,
      role_id: 1,
    };
    return { personnel };
  }

  async update(
    userID: number,
    personnelID: number,
    UpdatePersonnelDto: UpdatePersonnelDto,
  ): Promise<PersonnelRO> {
    const personnel = {
      id: 1,
      user_id: 1,
      host_id: 1,
      role_id: 1,
    };
    return { personnel };
  }

  async delete(userID: number, personnelID: number): Promise<PersonnelRO> {
    const personnel = {
      id: 1,
      user_id: 1,
      host_id: 1,
      role_id: 1,
    };
    return { personnel };
  }
}
