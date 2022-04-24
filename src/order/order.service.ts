import { Injectable } from '@nestjs/common';
import {
  CreateOrderDto,
  UpdateOrderDto,
  FilterOrderDto,
  Order,
  OrderRO,
} from './dto/index';

@Injectable()
export class OrderService {
  async create(
    userID: number,
    CreateOrderDto: CreateOrderDto,
  ): Promise<OrderRO> {
    const order = {
      id: 1,
      user_id: 1,
      host_id: 1,
      payment_id: 1,
      total_price: 10000,
      total_discount: 100000,
      total_tip: 0,
      time: '2022-02-02 20:30:40',
      description: 'nothing',
      orderItems: [
        {
          product: {
            id: 1,
            sub_cat_id: 1,
            name: 'Pizza',
            price: 100000,
            enabled: true,
            deleted: false,
          },
          count: 2,
        },
      ],
    };
    return { order };
  }

  async find(dto: FilterOrderDto): Promise<Order[]> {
    const order = [];
    order.push({
      id: 1,
      user_id: 1,
      host_id: 1,
      payment_id: 1,
      total_price: 10000,
      total_discount: 100000,
      total_tip: 0,
      time: '2022-02-02 20:30:40',
      description: 'nothing',
      orderItems: [
        {
          product: {
            id: 1,
            sub_cat_id: 1,
            name: 'Pizza',
            price: 100000,
            enabled: true,
            deleted: false,
          },
          count: 2,
        },
      ],
    });
    return order;
  }

  async findOne(orderID: number): Promise<OrderRO> {
    const order = {
      id: 1,
      user_id: 1,
      host_id: 1,
      payment_id: 1,
      total_price: 10000,
      total_discount: 100000,
      total_tip: 0,
      time: '2022-02-02 20:30:40',
      description: 'nothing',
      orderItems: [
        {
          product: {
            id: 1,
            sub_cat_id: 1,
            name: 'Pizza',
            price: 100000,
            enabled: true,
            deleted: false,
          },
          count: 2,
        },
      ],
    };
    return { order };
  }

  async update(
    userID: number,
    orderID: number,
    UpdateOrderDto: UpdateOrderDto,
  ): Promise<OrderRO> {
    const order = {
      id: 1,
      user_id: 1,
      host_id: 1,
      payment_id: 1,
      total_price: 10000,
      total_discount: 100000,
      total_tip: 0,
      time: '2022-02-02 20:30:40',
      description: 'nothing',
      orderItems: [
        {
          product: {
            id: 1,
            sub_cat_id: 1,
            name: 'Pizza',
            price: 100000,
            enabled: true,
            deleted: false,
          },
          count: 2,
        },
      ],
    };
    return { order };
  }

  async delete(userID: number, orderID: number): Promise<OrderRO> {
    const order = {
      id: 1,
      user_id: 1,
      host_id: 1,
      payment_id: 1,
      total_price: 10000,
      total_discount: 100000,
      total_tip: 0,
      time: '2022-02-02 20:30:40',
      description: 'nothing',
      orderItems: [
        {
          product: {
            id: 1,
            sub_cat_id: 1,
            name: 'Pizza',
            price: 100000,
            enabled: true,
            deleted: false,
          },
          count: 2,
        },
      ],
    };
    return { order };
  }
}
