import { Test, TestingModule } from '@nestjs/testing';
import { UserFeatureController } from './userFeature.controller';
import { UserFeatureService } from './userFeature.service';

describe('UserFeatureController', () => {
  let controller: UserFeatureController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserFeatureController],
      providers: [UserFeatureService],
    }).compile();

    controller = module.get<UserFeatureController>(UserFeatureController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
