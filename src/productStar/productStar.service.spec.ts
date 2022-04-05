import { Test, TestingModule } from '@nestjs/testing';
import { ProductStarService } from './productStar.service';

describe('ProductStarService', () => {
  let service: ProductStarService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductStarService],
    }).compile();

    service = module.get<ProductStarService>(ProductStarService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
