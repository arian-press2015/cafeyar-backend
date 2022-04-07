import { Test, TestingModule } from '@nestjs/testing';
import { SubcategoryDiscountController } from './subcategoryDiscount.controller';
import { SubcategoryDiscountService } from './subcategoryDiscount.service';

describe('SubcategoryDiscountController', () => {
  let controller: SubcategoryDiscountController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SubcategoryDiscountController],
      providers: [SubcategoryDiscountService],
    }).compile();

    controller = module.get<SubcategoryDiscountController>(
      SubcategoryDiscountController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
