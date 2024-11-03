import { Controller, Get } from '@nestjs/common';
import { RandomService } from './random.service';

@Controller('random')
export class RandomController {
  constructor(private readonly randomService: RandomService) {}

  @Get()
  getRandomNumber(): number {
    return this.randomService.getRandomNumber();
  }
}
