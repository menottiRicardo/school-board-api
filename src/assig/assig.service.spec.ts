import { Test, TestingModule } from '@nestjs/testing';
import { AssigService } from './assig.service';

describe('AssigService', () => {
  let service: AssigService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AssigService],
    }).compile();

    service = module.get<AssigService>(AssigService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
