import { Component, OnInit } from '@angular/core';
import { AnimalService } from 'src/app/services/animal.service';

@Component({
  selector: 'app-grand-child',
  template: `
  <p>Наш трудный питомец {{animalService.emoji }}</p>
  `,
  styleUrls: ['./grand-child.component.css'],
  providers: [
    // {
    //   provide: AnimalService,
    //   useValue: {
    //     emoji: '🐘'
    //   }
    // },
  ],
})
export class GrandChildComponent{

  constructor(public animalService: AnimalService) { }

}
