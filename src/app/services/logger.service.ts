import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {

  constructor() { }

  info(msg: string): void {
    console.log(msg);

  }
}
