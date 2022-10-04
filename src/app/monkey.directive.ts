import { Directive } from '@angular/core';
import { AnimalService } from './services/animal.service';

@Directive({
  selector: '[appMonkey]',
  providers: [
    {
      provide: AnimalService,
      useValue: {emoji: '🦍'},
    },
  ],
})
export class MonkeyDirective {

  constructor() { }

}
