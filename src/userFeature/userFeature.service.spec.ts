import { Test, TestingModule } from '@nestjs/testing';
import { UserFeatureService } from './userFeature.service';

describe('UserFeatureService', () => {
  let service: UserFeatureService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserFeatureService],
    }).compile();

    service = module.get<UserFeatureService>(UserFeatureService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
