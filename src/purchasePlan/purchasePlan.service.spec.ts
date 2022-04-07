import { Test, TestingModule } from '@nestjs/testing';
import { PurchasePlanService } from './purchasePlan.service';

describe('PurchasePlanService', () => {
  let service: PurchasePlanService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PurchasePlanService],
    }).compile();

    service = module.get<PurchasePlanService>(PurchasePlanService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
