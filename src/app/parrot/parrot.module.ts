import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimalService } from '../services/animal.service';
import { ZOO } from '../zoo';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    {
      // provide: AnimalService,
      provide: ZOO,
      useValue: {
        emoji: '🦜'
      }
    },
  ]
})
export class ParrotModule { }
