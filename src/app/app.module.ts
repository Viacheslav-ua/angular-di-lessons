import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ParrotModule } from './parrot/parrot.module';
import { RoosterModule } from './rooster/rooster.module';
import { AnimalService } from './services/animal.service';
import { ChildComponent } from './components/child/child.component';
import { GrandChildComponent } from './components/grand-child/grand-child.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    GrandChildComponent
  ],
  imports: [
    BrowserModule,
    RoosterModule,
    ParrotModule,
  ],
  providers: [
    // {
    //   provide: AnimalService,
    //   useValue: {
    //     emoji: '👹'
    //   }
    // },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
