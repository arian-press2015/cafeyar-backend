import { Test, TestingModule } from '@nestjs/testing';
import { PurchaseDiscountController } from './purchaseDiscount.controller';
import { PurchaseDiscountService } from './purchaseDiscount.service';

describe('PurchaseDiscountController', () => {
  let controller: PurchaseDiscountController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PurchaseDiscountController],
      providers: [PurchaseDiscountService],
    }).compile();

    controller = module.get<PurchaseDiscountController>(PurchaseDiscountController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
