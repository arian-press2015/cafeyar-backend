import { Injectable } from '@nestjs/common';
import {
  CreatePaymentDto,
  UpdatePaymentDto,
  FilterPaymentDto,
  Payment,
  PaymentRO,
} from './dto/index';

@Injectable()
export class PaymentService {
  async create(
    userID: number,
    CreatePaymentDto: CreatePaymentDto,
  ): Promise<PaymentRO> {
    const payment = {
      id: 1,
      invoice_id: 1,
      purchase_id: 1,
      price: 1000000,
      success: true,
    };
    return { payment };
  }

  async find(dto: FilterPaymentDto): Promise<Payment[]> {
    const payment = [];
    payment.push({
      id: 1,
      invoice_id: 1,
      purchase_id: 1,
      price: 1000000,
      success: true,
    });

    return payment;
  }

  async findOne(paymentID: number): Promise<PaymentRO> {
    const payment = {
      id: 1,
      invoice_id: 1,
      purchase_id: 1,
      price: 1000000,
      success: true,
    };
    return { payment };
  }

  async update(
    userID: number,
    paymentID: number,
    UpdatePaymentDto: UpdatePaymentDto,
  ): Promise<PaymentRO> {
    const payment = {
      id: 1,
      invoice_id: 1,
      purchase_id: 1,
      price: 1000000,
      success: true,
    };
    return { payment };
  }

  async delete(userID: number, paymentID: number): Promise<PaymentRO> {
    const payment = {
      id: 1,
      invoice_id: 1,
      purchase_id: 1,
      price: 1000000,
      success: true,
    };
    return { payment };
  }
}
