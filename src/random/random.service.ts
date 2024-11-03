import { Injectable } from '@nestjs/common';

@Injectable()
export class RandomService {
  getRandomNumber(): number {
    return Math.floor(Math.random() * 10) + 1;
  }
}
