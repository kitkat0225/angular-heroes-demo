import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];

  constructor(private heroService: HeroService) {

  }

  getHeros(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  async getHeroesFromServer(): Promise<void> {
    try {
      const res = await this.heroService.getHeroesFromServer().toPromise();
      this.heroes = [...this.heroes, ...res];
    } catch (e) {
      console.log(e);
    }
  }

  ngOnInit(): void {
    this.getHeros();
    this.getHeroesFromServer();
  }

}
