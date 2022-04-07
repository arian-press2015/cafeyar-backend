import { Test, TestingModule } from '@nestjs/testing';
import { SubcategoryDiscountService } from './subcategoryDiscount.service';

describe('SubcategoryDiscountService', () => {
  let service: SubcategoryDiscountService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SubcategoryDiscountService],
    }).compile();

    service = module.get<SubcategoryDiscountService>(
      SubcategoryDiscountService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
