import { Component, OnDestroy, OnInit } from '@angular/core'; 
import { Hero } from 'src/app/moduls/hero.interface';
import { HeroService } from 'src/app/services/hero.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit, OnDestroy {
 
  heroes:Hero[]=[];

  selectHero:Hero={
    name:'',
    id:0
  };


  constructor(
      private heroService:HeroService,
      public router:Router){

  }
  
  ngOnInit(): void {
    this.getHeroes();
  }
  
  getHeroes = ()=>{
    this.heroService.getHeroes('Heroes').subscribe(
      (heroes) => {
        console.log('actualizo heroes')
        this.heroes = heroes
      }
    )
  }


  onSelect(hero:Hero):void{
    //this.selectHero=hero;    
  }
  
  onDelete = (hero:Hero):void=>{
    this.selectHero=hero;
    this.heroes=[];
    this.heroService.deleteHeroe(hero.id).subscribe(       
       heroes=>{
        this.heroes = heroes;
        this.router.navigate(['/heroes/herovacio']);
       }
    )
  }

  ngOnDestroy() {
    console.log("DESTROY LISTA PADRE") 
  }
}

// https://docs.angular.lat/tutorial/toh-pt5