import { Component, Host, Optional, Self, SkipSelf } from '@angular/core';
import { AnimalService } from '../services/animal.service';

@Component({
  selector: 'app-child',
  template: `
  <h1>Hello!</h1>
  <p>My animal is {{ animalService.emoji }}</p>
  `,
  providers: [
    {
      provide: AnimalService,
      useValue: {
        emoji: '🐓'
      }
    },
  ]
})
export class ChildComponent {

  constructor(
    @Host()
    // @SkipSelf()
    // @Self()
    @Optional()
    public animalService: AnimalService,
  ) {
    if (this.animalService === null) {
      this.animalService = {
        emoji: '🐀'
      }
    }
   }


}
