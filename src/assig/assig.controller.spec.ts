import { Test, TestingModule } from '@nestjs/testing';
import { AssigController } from './assig.controller';
import { AssigService } from './assig.service';

describe('AssigController', () => {
  let controller: AssigController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AssigController],
      providers: [AssigService],
    }).compile();

    controller = module.get<AssigController>(AssigController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
