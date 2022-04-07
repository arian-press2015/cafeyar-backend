import { Test, TestingModule } from '@nestjs/testing';
import { PurchasePlanController } from './purchasePlan.controller';
import { PurchasePlanService } from './purchasePlan.service';

describe('PurchasePlanController', () => {
  let controller: PurchasePlanController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PurchasePlanController],
      providers: [PurchasePlanService],
    }).compile();

    controller = module.get<PurchasePlanController>(PurchasePlanController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
