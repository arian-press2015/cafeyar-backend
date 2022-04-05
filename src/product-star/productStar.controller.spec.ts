import { Test, TestingModule } from '@nestjs/testing';
import { ProductStarController } from './productStar.controller';
import { ProductStarService } from './productStar.service';

describe('ProductStarController', () => {
  let controller: ProductStarController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductStarController],
      providers: [ProductStarService],
    }).compile();

    controller = module.get<ProductStarController>(ProductStarController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
