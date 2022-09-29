import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ADMIN_EMAILS, PAGE_CONFIG } from './config/page.config';
import { BetterLoggerService } from './services/better-logger.service';
import { GreetingsService } from './services/greetings.service';
import { LoggerService } from './services/logger.service';
import { UserService } from './services/user.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    BetterLoggerService,
    // {
    //   provide: BetterLoggerService,
    //   useValue: {
    //     info: (msg: string) => {}, //заглушка
    //   },
    // },
    {
      provide: LoggerService,
      useExisting: BetterLoggerService,
    },
    // LoggerService,
    {
      provide: PAGE_CONFIG,
      useValue: { title: 'Интерафейс PageConfig'}
    },
    UserService,
    {
      provide: GreetingsService,
      useFactory: (
        loggerService: LoggerService,
        userService: UserService,
      ) => {
        return new GreetingsService(loggerService, userService.info().name)
      },
      deps:[LoggerService, UserService],
    },
    {
      provide: ADMIN_EMAILS,
      useValue: 'atph@ukr.net',
      multi: true,

    },
    {
      provide: ADMIN_EMAILS,
      useValue: 'address@gmail.net',
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
