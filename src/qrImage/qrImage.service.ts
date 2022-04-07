import { Injectable } from '@nestjs/common';
import {
  CreateQrImageDto,
  UpdateQrImageDto,
  QrImage,
  QrImageRO,
} from './dto/index';

@Injectable()
export class QrImageService {
  async create(
    userID: number,
    CreateQrImageDto: CreateQrImageDto,
  ): Promise<QrImageRO> {
    const qrImage = {
      host_table_id: 1,
      width: 640,
      height: 480,
      url: 'here/file.jpg',
    };
    return { qrImage };
  }

  async findOne(qrImageID: number): Promise<QrImageRO> {
    const qrImage = {
      host_table_id: 1,
      width: 640,
      height: 480,
      url: 'here/file.jpg',
    };
    return { qrImage };
  }

  async update(
    userID: number,
    qrImageID: number,
    UpdateQrImageDto: UpdateQrImageDto,
  ): Promise<QrImageRO> {
    const qrImage = {
      host_table_id: 1,
      width: 640,
      height: 480,
      url: 'here/file.jpg',
    };
    return { qrImage };
  }

  async delete(userID: number, qrImageID: number): Promise<QrImageRO> {
    const qrImage = {
      host_table_id: 1,
      width: 640,
      height: 480,
      url: 'here/file.jpg',
    };
    return { qrImage };
  }
}
