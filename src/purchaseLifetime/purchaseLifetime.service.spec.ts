import { Test, TestingModule } from '@nestjs/testing';
import { PurchaseLifetimeService } from './purchaseLifetime.service';

describe('PurchaseLifetimeService', () => {
  let service: PurchaseLifetimeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PurchaseLifetimeService],
    }).compile();

    service = module.get<PurchaseLifetimeService>(PurchaseLifetimeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
