import { Injectable } from '@nestjs/common';
import {
  CreateProductDto,
  UpdateProductDto,
  FilterProductDto,
  Product,
  ProductRO,
} from './dto/index';

@Injectable()
export class ProductService {
  async create(
    userID: number,
    CreateProductDto: CreateProductDto,
  ): Promise<ProductRO> {
    const product = {
      id: 1,
      sub_cat_id: 1,
      name: 'Pizza',
      price: 100000,
      enabled: true,
      deleted: false,
    };
    return { product };
  }

  async find(dto: FilterProductDto): Promise<Product[]> {
    const product = [];
    product.push({
      id: 1,
      sub_cat_id: 1,
      name: 'Pizza',
      price: 100000,
      enabled: true,
      deleted: false,
    });
    return product;
  }

  async findOne(productID: number): Promise<ProductRO> {
    const product = {
      id: 1,
      sub_cat_id: 1,
      name: 'Pizza',
      price: 100000,
      enabled: true,
      deleted: false,
    };
    return { product };
  }

  async update(
    userID: number,
    productID: number,
    UpdateProductDto: UpdateProductDto,
  ): Promise<ProductRO> {
    const product = {
      id: 1,
      sub_cat_id: 1,
      name: 'Pizza',
      price: 100000,
      enabled: true,
      deleted: false,
    };
    return { product };
  }

  async delete(userID: number, productID: number): Promise<ProductRO> {
    const product = {
      id: 1,
      sub_cat_id: 1,
      name: 'Pizza',
      price: 100000,
      enabled: true,
      deleted: false,
    };
    return { product };
  }
}
