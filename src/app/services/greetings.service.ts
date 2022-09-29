import { LoggerService } from "./logger.service";


export class GreetingsService {

  constructor(
    private loggerService: LoggerService,
    private name: string
  ) {
    this.loggerService.info(name + 'use GreetingsService')
  }

  public getMessage() {
    return this.name + ' bless you'
  }
}
