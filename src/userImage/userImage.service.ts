import { Injectable } from '@nestjs/common';
import {
  CreateUserImageDto,
  UpdateUserImageDto,
  UserImage,
  UserImageRO,
} from './dto/index';

@Injectable()
export class UserImageService {
  async create(
    userID: number,
    CreateUserImageDto: CreateUserImageDto,
  ): Promise<UserImageRO> {
    const userImage = {
      user_id: 1,
      width: 640,
      height: 480,
      url: '/here/file.jpg',
    };
    return { userImage };
  }

  async findOne(userImageID: number): Promise<UserImageRO> {
    const userImage = {
      user_id: 1,
      width: 640,
      height: 480,
      url: '/here/file.jpg',
    };
    return { userImage };
  }

  async update(
    userID: number,
    userImageID: number,
    UpdateUserImageDto: UpdateUserImageDto,
  ): Promise<UserImageRO> {
    const userImage = {
      user_id: 1,
      width: 640,
      height: 480,
      url: '/here/file.jpg',
    };
    return { userImage };
  }

  async delete(userID: number, userImageID: number): Promise<UserImageRO> {
    const userImage = {
      user_id: 1,
      width: 640,
      height: 480,
      url: '/here/file.jpg',
    };
    return { userImage };
  }
}
