import { Injectable } from '@nestjs/common';
import {
  CreateVersionDto,
  UpdateVersionDto,
  FilterVersionDto,
  Version,
  VersionRO,
} from './dto/index';

@Injectable()
export class VersionService {
  async create(
    userID: number,
    CreateVersionDto: CreateVersionDto,
  ): Promise<VersionRO> {
    const version = {
      id: 1,
      version_number: 1,
      creation_date: '2022-02-02 20:30:40',
    };
    return { version };
  }

  async find(dto: FilterVersionDto): Promise<Version[]> {
    const version = [];
    version.push({
      id: 1,
      version_number: 1,
      creation_date: '2022-02-02 20:30:40',
    });
    return version;
  }

  async findOne(versionID: number): Promise<VersionRO> {
    const version = {
      id: 1,
      version_number: 1,
      creation_date: '2022-02-02 20:30:40',
    };
    return { version };
  }

  async update(
    userID: number,
    versionID: number,
    UpdateVersionDto: UpdateVersionDto,
  ): Promise<VersionRO> {
    const version = {
      id: 1,
      version_number: 1,
      creation_date: '2022-02-02 20:30:40',
    };
    return { version };
  }

  async delete(userID: number, versionID: number): Promise<VersionRO> {
    const version = {
      id: 1,
      version_number: 1,
      creation_date: '2022-02-02 20:30:40',
    };
    return { version };
  }
}
