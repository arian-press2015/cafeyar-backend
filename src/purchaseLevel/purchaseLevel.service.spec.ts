import { Test, TestingModule } from '@nestjs/testing';
import { PurchaseLevelService } from './purchaseLevel.service';

describe('PurchaseLevelService', () => {
  let service: PurchaseLevelService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PurchaseLevelService],
    }).compile();

    service = module.get<PurchaseLevelService>(PurchaseLevelService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
