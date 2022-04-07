import { Injectable } from '@nestjs/common';
import {
  CreateProductStarDto,
  UpdateProductStarDto,
  FilterProductStarDto,
  ProductStar,
  ProductStarRO,
} from './dto/index';

@Injectable()
export class ProductStarService {
  async create(
    userID: number,
    CreateProductStarDto: CreateProductStarDto,
  ): Promise<ProductStarRO> {
    const productStar = {
      id: 1,
      product_id: 1,
      customer_id: 1,
      star: 5,
    };
    return { productStar };
  }

  async find(dto: FilterProductStarDto): Promise<ProductStar[]> {
    const productStar = [];
    productStar.push({
      id: 1,
      product_id: 1,
      customer_id: 1,
      star: 5,
    });
    return productStar;
  }

  async findOne(productStarID: number): Promise<ProductStarRO> {
    const productStar = {
      id: 1,
      product_id: 1,
      customer_id: 1,
      star: 5,
    };
    return { productStar };
  }

  async delete(userID: number, productStarID: number): Promise<ProductStarRO> {
    const productStar = {
      id: 1,
      product_id: 1,
      customer_id: 1,
      star: 5,
    };
    return { productStar };
  }
}
