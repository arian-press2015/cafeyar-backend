import { Injectable } from '@nestjs/common';
import { CreateHostDto, Host, HostRO, UpdateHostDto } from './dto';

@Injectable()
export class HostService {
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
