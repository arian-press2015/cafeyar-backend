import { Injectable } from '@nestjs/common';
import {
  CreateFaqDto,
  UpdateFaqDto,
  FilterFaqDto,
  Faq,
  FaqRO,
} from './dto/index';

@Injectable()
export class FaqService {
  async create(userID: number, CreateFaqDto: CreateFaqDto): Promise<FaqRO> {
    const faq = {
      id: 1,
      question: 'Why Pizza?',
      answer: 'Because Pizza.',
    };
    return { faq };
  }

  async find(dto: FilterFaqDto): Promise<Faq[]> {
    const faq = [];
    faq.push({
      id: 1,
      question: 'Why Pizza?',
      answer: 'Because Pizza.',
    });
    return faq;
  }

  async findOne(faqID: number): Promise<FaqRO> {
    const faq = {
      id: 1,
      question: 'Why Pizza?',
      answer: 'Because Pizza.',
    };
    return { faq };
  }

  async update(
    userID: number,
    faqID: number,
    UpdateFaqDto: UpdateFaqDto,
  ): Promise<FaqRO> {
    const faq = {
      id: 1,
      question: 'Why Pizza?',
      answer: 'Because Pizza.',
    };
    return { faq };
  }

  async delete(userID: number, faqID: number): Promise<FaqRO> {
    const faq = {
      id: 1,
      question: 'Why Pizza?',
      answer: 'Because Pizza.',
    };
    return { faq };
  }
}
