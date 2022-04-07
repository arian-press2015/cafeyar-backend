import { Test, TestingModule } from '@nestjs/testing';
import { PurchaseDiscountService } from './purchaseDiscount.service';

describe('PurchaseDiscountService', () => {
  let service: PurchaseDiscountService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PurchaseDiscountService],
    }).compile();

    service = module.get<PurchaseDiscountService>(PurchaseDiscountService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
