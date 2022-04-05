import { Injectable } from '@nestjs/common';
import {
  CreateHostDto,
  Host,
  HostRO,
  UpdateHostDto,
  FilterHostDto,
} from './dto';

@Injectable()
export class HostService {
  async create(userID: number, hostData: CreateHostDto): Promise<HostRO> {
    const host = {
      id: 1,
      owner: 1,
      name: 'APCafe',
      phone: '03146258582',
      address: 'here',
      description: 'my cafe',
      opening_time: '10:30:00',
      closing_time: '20:30:00',
    };
    return { host };
  }

  async find(dto: FilterHostDto): Promise<Host[]> {
    const host = [];
    host.push({
      id: 1,
      owner: 1,
      name: 'APCafe',
      phone: '03146258582',
      address: 'here',
      description: 'my cafe',
      opening_time: '10:30:00',
      closing_time: '20:30:00',
    });
    return host;
  }

  async findOne(hostID: number): Promise<HostRO> {
    const host = {
      id: 1,
      owner: 1,
      name: 'APCafe',
      phone: '03146258582',
      address: 'here',
      description: 'my cafe',
      opening_time: '10:30:00',
      closing_time: '20:30:00',
    };
    return { host };
  }

  async findMyHosts(userID: number): Promise<Host[]> {
    const hosts = [];
    hosts.push({
      id: 1,
      owner: 1,
      name: 'APCafe',
      phone: '03146258582',
      address: 'here',
      description: 'my cafe',
      opening_time: '10:30:00',
      closing_time: '20:30:00',
    });
    return hosts;
  }

  async findAccesibleHosts(userID: number): Promise<Host[]> {
    const hosts = [];
    hosts.push({
      id: 1,
      owner: 1,
      name: 'APCafe',
      phone: '03146258582',
      address: 'here',
      description: 'my cafe',
      opening_time: '10:30:00',
      closing_time: '20:30:00',
    });
    return hosts;
  }

  async update(
    userID: number,
    hostID: number,
    hostData: UpdateHostDto,
  ): Promise<HostRO> {
    const host = {
      id: 1,
      owner: 1,
      name: 'APCafe',
      phone: '03146258582',
      address: 'here',
      description: 'my cafe',
      opening_time: '10:30:00',
      closing_time: '20:30:00',
    };
    return { host };
  }

  async delete(userID: number, hostID: number): Promise<HostRO> {
    const host = {
      id: 1,
      owner: 1,
      name: 'APCafe',
      phone: '03146258582',
      address: 'here',
      description: 'my cafe',
      opening_time: '10:30:00',
      closing_time: '20:30:00',
    };
    return { host };
  }
}
