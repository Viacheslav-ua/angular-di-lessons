import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  info(): { name: string, age: number } {
    return {
      name: 'Ashley',
      age: 34,
    }
  }
}
