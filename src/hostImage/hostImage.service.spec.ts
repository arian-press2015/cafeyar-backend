import { Test, TestingModule } from '@nestjs/testing';
import { HostImageService } from './hostImage.service';

describe('HostImageService', () => {
  let service: HostImageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HostImageService],
    }).compile();

    service = module.get<HostImageService>(HostImageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
