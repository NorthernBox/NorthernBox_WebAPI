import { Test, TestingModule } from '@nestjs/testing';
import { MenteesController } from './mentees.controller';
import { MenteesService } from './mentees.service';

describe('MenteesController', () => {
  let controller: MenteesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MenteesController],
      providers: [MenteesService],
    }).compile();

    controller = module.get<MenteesController>(MenteesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
