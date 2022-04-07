import { Test, TestingModule } from '@nestjs/testing';
import { OwnerPermissionController } from './ownerPermission.controller';
import { OwnerPermissionService } from './ownerPermission.service';

describe('OwnerPermissionController', () => {
  let controller: OwnerPermissionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OwnerPermissionController],
      providers: [OwnerPermissionService],
    }).compile();

    controller = module.get<OwnerPermissionController>(
      OwnerPermissionController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
