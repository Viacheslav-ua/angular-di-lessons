import { Component, OnInit } from '@angular/core';
import { AnimalService } from 'src/app/services/animal.service';

@Component({
  selector: 'app-child',
  template: `
  <ng-content></ng-content>
  <p>Наш любимый питомец {{animalService.emoji }}</p>
  <app-grand-child></app-grand-child>
  `,
  styleUrls: ['./child.component.css'],
  viewProviders: [
    {
      provide: AnimalService,
      useValue: {
        emoji: '🐕'
      }
    },
  ],
})
export class ChildComponent{

  constructor(public animalService: AnimalService) { }

}
