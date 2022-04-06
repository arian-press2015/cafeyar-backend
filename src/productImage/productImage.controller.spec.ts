import { Test, TestingModule } from '@nestjs/testing';
import { ProductImageController } from './productImage.controller';
import { ProductImageService } from './productImage.service';

describe('ProductImageController', () => {
  let controller: ProductImageController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductImageController],
      providers: [ProductImageService],
    }).compile();

    controller = module.get<ProductImageController>(ProductImageController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
