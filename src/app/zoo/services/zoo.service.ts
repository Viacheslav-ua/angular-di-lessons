import { Inject, Injectable, Optional } from '@angular/core';
import { Animal } from '../models/animal';
import { ZOO } from '../models/zoo';

@Injectable()
export class ZooService {

  constructor(
    @Inject(ZOO) @Optional() public readonly animals: Animal[] = [],
  ) { }
}
