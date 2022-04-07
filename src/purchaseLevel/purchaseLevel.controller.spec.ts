import { Test, TestingModule } from '@nestjs/testing';
import { PurchaseLevelController } from './purchaseLevel.controller';
import { PurchaseLevelService } from './purchaseLevel.service';

describe('PurchaseLevelController', () => {
  let controller: PurchaseLevelController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PurchaseLevelController],
      providers: [PurchaseLevelService],
    }).compile();

    controller = module.get<PurchaseLevelController>(PurchaseLevelController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
