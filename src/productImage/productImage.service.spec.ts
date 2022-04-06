import { Test, TestingModule } from '@nestjs/testing';
import { ProductImageService } from './productImage.service';

describe('ProductImageService', () => {
  let service: ProductImageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductImageService],
    }).compile();

    service = module.get<ProductImageService>(ProductImageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
