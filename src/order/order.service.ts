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
      host_id: 1,
      invoice_id: 1,
      total_price: 10000,
      total_discount: 100000,
      time: '2020/02/02 10:20:30',
      description: 'nothing',
    };
    return { order };
  }

  async find(dto: FilterOrderDto): Promise<Order[]> {
    const order = [];
    order.push({
      id: 1,
      host_id: 1,
      invoice_id: 1,
      total_price: 10000,
      total_discount: 100000,
      time: '2020/02/02 10:20:30',
      description: 'nothing',
    });
    return order;
  }

  async findOne(orderID: number): Promise<OrderRO> {
    const order = {
      id: 1,
      host_id: 1,
      invoice_id: 1,
      total_price: 10000,
      total_discount: 100000,
      time: '2020/02/02 10:20:30',
      description: 'nothing',
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
      host_id: 1,
      invoice_id: 1,
      total_price: 10000,
      total_discount: 100000,
      time: '2020/02/02 10:20:30',
      description: 'nothing',
    };
    return { order };
  }

  async delete(userID: number, orderID: number): Promise<OrderRO> {
    const order = {
      id: 1,
      host_id: 1,
      invoice_id: 1,
      total_price: 10000,
      total_discount: 100000,
      time: '2020/02/02 10:20:30',
      description: 'nothing',
    };
    return { order };
  }
}
