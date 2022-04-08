import { Injectable } from '@nestjs/common';
import {
  CreateHostImageDto,
  UpdateHostImageDto,
  HostImage,
  HostImageRO,
} from './dto/index';

@Injectable()
export class HostImageService {
  async create(
    userID: number,
    CreateHostImageDto: CreateHostImageDto,
  ): Promise<HostImageRO> {
    const hostImage = {
      host_id: 1,
      width: 640,
      height: 480,
      url: '/pic640480.jpg',
    };
    return { hostImage };
  }

  async findOne(hostImageID: number): Promise<HostImageRO> {
    const hostImage = {
      host_id: 1,
      width: 640,
      height: 480,
      url: '/pic640480.jpg',
    };
    return { hostImage };
  }

  async update(
    userID: number,
    hostImageID: number,
    UpdateHostImageDto: UpdateHostImageDto,
  ): Promise<HostImageRO> {
    const hostImage = {
      host_id: 1,
      width: 640,
      height: 480,
      url: '/pic640480.jpg',
    };
    return { hostImage };
  }

  async delete(userID: number, hostImageID: number): Promise<HostImageRO> {
    const hostImage = {
      host_id: 1,
      width: 640,
      height: 480,
      url: '/pic640480.jpg',
    };
    return { hostImage };
  }
}
