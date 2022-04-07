import { Test, TestingModule } from '@nestjs/testing';
import { OwnerRoleController } from './ownerRole.controller';
import { OwnerRoleService } from './ownerRole.service';

describe('OwnerRoleController', () => {
  let controller: OwnerRoleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OwnerRoleController],
      providers: [OwnerRoleService],
    }).compile();

    controller = module.get<OwnerRoleController>(OwnerRoleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
