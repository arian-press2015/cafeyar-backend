import { Test, TestingModule } from '@nestjs/testing';
import { QrImageController } from './qrImage.controller';
import { QrImageService } from './qrImage.service';

describe('QrImageController', () => {
  let controller: QrImageController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [QrImageController],
      providers: [QrImageService],
    }).compile();

    controller = module.get<QrImageController>(QrImageController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
