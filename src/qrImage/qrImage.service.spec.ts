import { Test, TestingModule } from '@nestjs/testing';
import { QrImageService } from './qrImage.service';

describe('QrImageService', () => {
  let service: QrImageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [QrImageService],
    }).compile();

    service = module.get<QrImageService>(QrImageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
