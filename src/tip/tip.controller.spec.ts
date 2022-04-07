import { Test, TestingModule } from '@nestjs/testing';
import { TipController } from './tip.controller';
import { TipService } from './tip.service';

describe('TipController', () => {
  let controller: TipController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TipController],
      providers: [TipService],
    }).compile();

    controller = module.get<TipController>(TipController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
