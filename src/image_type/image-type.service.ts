import { Injectable } from '@nestjs/common';
import {
  CreateImageTypeDto,
  UpdateImageTypeDto,
  ImageType,
  ImageTypeRO,
} from './dto/index';

@Injectable()
export class ImageTypeService {
  async create(
    userID: number,
    CreateImageTypeDto: CreateImageTypeDto,
  ): Promise<ImageTypeRO> {
    const imageType = {
      id: 1,
      type: 'UserImage',
      description: 'this is the User profile image',
      width: 640,
      height: 480,
    };
    return { imageType };
  }

  async find(): Promise<ImageType[]> {
    const imageType = [];
    imageType.push({
      id: 1,
      type: 'UserImage',
      description: 'this is the User profile image',
      width: 640,
      height: 480,
    });
    return imageType;
  }

  async findOne(imageTypeID: number): Promise<ImageTypeRO> {
    const imageType = {
      id: 1,
      type: 'UserImage',
      description: 'this is the User profile image',
      width: 640,
      height: 480,
    };
    return { imageType };
  }

  async update(
    userID: number,
    imageTypeID: number,
    UpdateImageTypeDto: UpdateImageTypeDto,
  ): Promise<ImageTypeRO> {
    const imageType = {
      id: 1,
      type: 'UserImage',
      description: 'this is the User profile image',
      width: 640,
      height: 480,
    };
    return { imageType };
  }

  async delete(userID: number, imageTypeID: number): Promise<ImageTypeRO> {
    const imageType = {
      id: 1,
      type: 'UserImage',
      description: 'this is the User profile image',
      width: 640,
      height: 480,
    };
    return { imageType };
  }
}
