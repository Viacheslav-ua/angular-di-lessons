import { Injectable } from "@angular/core"
import { LoggerService } from "./logger.service"


@Injectable()
export class BetterLoggerService extends LoggerService {

  constructor() {
    super()
    this.info('BetterLoggerService - создан')
  }

  override info(msg: string): void {
    super.info(`---------${msg}---------`)
  }
}
