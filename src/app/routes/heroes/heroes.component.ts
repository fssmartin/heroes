import { Component, OnDestroy, OnInit } from '@angular/core'; 
import { Hero, Heroo } from 'src/app/moduls/hero.interface';
import { HeroService } from 'src/app/services/hero.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit, OnDestroy {
 
  // heroes:Hero[]=[];
  heroess:Heroo[]=[];

  // selectHero:Hero={
  //   name:'',
  //   id:0
  // };

  selectHeroo:Heroo={
    id: 0,
    name: '',
    username: '',
    email: '',
    address: {
      street: '',
      suite: '',
      city: '',
      zipcode: '',
      geo: {
        lat: '',
        lng: ''        
      }       
    },
    phone: '',
    website: '',
    company: {
      name: '',
      catchPhrase: '',
      bs: ''      
    }
  };

  visible:boolean=false;

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
        if(heroes.length>0){
          this.heroess = heroes;
          this.visible=false;
        }else{
          this.visible=true;
        }
      }
    )
  }

  onSelect(heroo:Heroo):void{
    this.selectHeroo=heroo;    
  }
  
  onDelete = (heroo:Heroo)=>{
    this.selectHeroo=heroo;
    this.heroess=[];
    this.heroService.deleteHero(heroo.id).subscribe(       
         heroes=>{
            this.heroess = heroes;
            this.router.navigate(['/heroes/herovacio']);
         }
    )
  }

  ngOnDestroy() {
    console.log("DESTROY LISTA PADRE") 
  }
}

// https://docs.angular.lat/tutorial/toh-pt5