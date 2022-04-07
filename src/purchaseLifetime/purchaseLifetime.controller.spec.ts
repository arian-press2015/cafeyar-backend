import { Test, TestingModule } from '@nestjs/testing';
import { PurchaseLifetimeController } from './purchaseLifetime.controller';
import { PurchaseLifetimeService } from './purchaseLifetime.service';

describe('PurchaseLifetimeController', () => {
  let controller: PurchaseLifetimeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PurchaseLifetimeController],
      providers: [PurchaseLifetimeService],
    }).compile();

    controller = module.get<PurchaseLifetimeController>(PurchaseLifetimeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
