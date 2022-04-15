import { Injectable } from '@nestjs/common';
import {
  CreateInvoiceDto,
  UpdateInvoiceDto,
  FilterInvoiceDto,
  Invoice,
  InvoiceRO,
} from './dto/index';

@Injectable()
export class InvoiceService {
  async create(
    userID: number,
    CreateInvoiceDto: CreateInvoiceDto,
  ): Promise<InvoiceRO> {
    const invoice = {
      id: 1,
      user_id: 1,
      price: 1000000,
      discount: 100000,
      pay_date: '2022-02-02 20:30:40',
    };
    return { invoice };
  }

  async find(dto: FilterInvoiceDto): Promise<Invoice[]> {
    const invoice = [];
    invoice.push({
      id: 1,
      user_id: 1,
      price: 1000000,
      discount: 100000,
      pay_date: '2022-02-02 20:30:40',
    });
    return invoice;
  }

  async findOne(invoiceID: number): Promise<InvoiceRO> {
    const invoice = {
      id: 1,
      user_id: 1,
      price: 1000000,
      discount: 100000,
      pay_date: '2022-02-02 20:30:40',
    };
    return { invoice };
  }

  async update(
    userID: number,
    invoiceID: number,
    UpdateInvoiceDto: UpdateInvoiceDto,
  ): Promise<InvoiceRO> {
    const invoice = {
      id: 1,
      user_id: 1,
      price: 1000000,
      discount: 100000,
      pay_date: '2022-02-02 20:30:40',
    };
    return { invoice };
  }

  async delete(userID: number, invoiceID: number): Promise<InvoiceRO> {
    const invoice = {
      id: 1,
      user_id: 1,
      price: 1000000,
      discount: 100000,
      pay_date: '2022-02-02 20:30:40',
    };
    return { invoice };
  }
}
