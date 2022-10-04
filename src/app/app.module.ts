import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { ZooModule } from './zoo/zoo.module'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ZooModule.forRoot([
      {emoji: '🐼'},
      {emoji: '🦄'},
    ]),
    ZooModule.forFeature([
      {emoji: '🐞'},
      {emoji: '🦆'},
      {emoji: '🦞'},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
