import { Injectable } from '@nestjs/common';
import {
  CreateProductImageDto,
  UpdateProductImageDto,
  FilterProductImageDto,
  ProductImage,
  ProductImageRO,
} from './dto/index';

@Injectable()
export class ProductImageService {
  async create(
    userID: number,
    CreateProductImageDto: CreateProductImageDto,
  ): Promise<ProductImageRO> {
    const productImage = {
      id: 1,
      product_id: 1,
      width: 640,
      height: 480,
      url: '/pic640480.jpg',
      user_image: true,
    };
    return { productImage };
  }

  async find(dto: FilterProductImageDto): Promise<ProductImage[]> {
    const productImage = [];
    productImage.push({
      id: 1,
      product_id: 1,
      width: 640,
      height: 480,
      url: '/pic640480.jpg',
      user_image: true,
    });
    return productImage;
  }

  async findOne(productImageID: number): Promise<ProductImageRO> {
    const productImage = {
      id: 1,
      product_id: 1,
      width: 640,
      height: 480,
      url: '/pic640480.jpg',
      user_image: true,
    };
    return { productImage };
  }

  async update(
    userID: number,
    productImageID: number,
    UpdateProductImageDto: UpdateProductImageDto,
  ): Promise<ProductImageRO> {
    const productImage = {
      id: 1,
      product_id: 1,
      width: 640,
      height: 480,
      url: '/pic640480.jpg',
      user_image: true,
    };
    return { productImage };
  }

  async delete(
    userID: number,
    productImageID: number,
  ): Promise<ProductImageRO> {
    const productImage = {
      id: 1,
      product_id: 1,
      width: 640,
      height: 480,
      url: '/pic640480.jpg',
      user_image: true,
    };
    return { productImage };
  }
}
