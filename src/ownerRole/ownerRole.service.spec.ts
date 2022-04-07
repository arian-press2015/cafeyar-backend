import { Test, TestingModule } from '@nestjs/testing';
import { OwnerRoleService } from './ownerRole.service';

describe('OwnerRoleService', () => {
  let service: OwnerRoleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OwnerRoleService],
    }).compile();

    service = module.get<OwnerRoleService>(OwnerRoleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
