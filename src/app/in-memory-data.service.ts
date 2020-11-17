import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { _id: 'ssss', id: 11, name: 'Dr Nice', v: 0 },
      {  _id: 'ssss', id: 12, name: 'Narco', v: 0 },
      {  _id: 'ssss', id: 13, name: 'Bombasto', v: 0 },
      {  _id: 'ssss', id: 14, name: 'Celeritas', v: 0 },
      {  _id: 'ssss', id: 15, name: 'Magneta', v: 0 },
      {  _id: 'ssss', id: 16, name: 'RubberMan', v: 0 },
      {  _id: 'ssss', id: 17, name: 'Dynama', v: 0 },
      {  _id: 'ssss', id: 18, name: 'Dr IQ', v: 0 },
      {  _id: 'ssss', id: 19, name: 'Magma', v: 0 },
      {  _id: 'ssss', id: 20, name: 'Tornado', v: 0 }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}