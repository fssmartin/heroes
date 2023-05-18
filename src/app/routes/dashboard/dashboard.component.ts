import { Component } from '@angular/core';
import { MessageService } from '../../services/message.service';
import { Hero } from '../../moduls/hero.interface';
import { HeroService } from '../../services/hero.service'; 

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
 
  heroes: Hero[] = [];

  constructor(private messageService:MessageService,private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    // this.heroService.getHeroes('-- DASH')
    //   .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }
}
