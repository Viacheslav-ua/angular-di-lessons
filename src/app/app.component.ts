import { Component, Inject } from '@angular/core'
import { ADMIN_EMAILS, PageConfig, PAGE_CONFIG } from './config/page.config'
import { AnotherGreetingsService } from './services/another-greetings.service'
import { BetterLoggerService } from './services/better-logger.service'
import { GreetingsService } from './services/greetings.service'
import { LoggerService } from './services/logger.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-di-lessons'

  constructor(
    @Inject(PAGE_CONFIG) pageConfig: PageConfig,
    logger: LoggerService,
    betterLogger: BetterLoggerService,
    greetingsService: GreetingsService,
    anotherGreetingsService: AnotherGreetingsService,
    @Inject(ADMIN_EMAILS) adminEmails: string[],
  ) {
    this.title = pageConfig.title
    logger.info('Hello LoggerService')
    betterLogger.info('Better Logger')
    console.log(this.title)
    console.log(greetingsService.getMessage())
    console.log(anotherGreetingsService.getMessage())
    console.log(adminEmails)




  }
}
