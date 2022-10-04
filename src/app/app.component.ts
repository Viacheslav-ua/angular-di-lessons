import { Component } from '@angular/core';
import { AnimalService } from './services/animal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    {
      provide: AnimalService,
      useValue: {
        emoji: '🐕'
      }
    }
  ]
})
export class AppComponent {
  title = 'angular-di-lessons';
}
