import { Test, TestingModule } from '@nestjs/testing';
import { OwnerPermissionService } from './ownerPermission.service';

describe('OwnerPermissionService', () => {
  let service: OwnerPermissionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OwnerPermissionService],
    }).compile();

    service = module.get<OwnerPermissionService>(OwnerPermissionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
