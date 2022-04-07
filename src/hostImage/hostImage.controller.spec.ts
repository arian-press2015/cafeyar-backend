import { Test, TestingModule } from '@nestjs/testing';
import { HostImageController } from './hostImage.controller';
import { HostImageService } from './hostImage.service';

describe('HostImageController', () => {
  let controller: HostImageController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HostImageController],
      providers: [HostImageService],
    }).compile();

    controller = module.get<HostImageController>(HostImageController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
