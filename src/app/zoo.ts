import { InjectionToken } from "@angular/core";
import { AnimalService } from "./services/animal.service";

export const ZOO = new InjectionToken<AnimalService[]>('zoo')
