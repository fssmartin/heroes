import { Component, OnInit, OnDestroy } from '@angular/core';
import { Hero,Heroo} from 'src/app/moduls/hero.interface';
import { HeroService } from '../../../services/hero.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-anadir',
  templateUrl: './anadir.component.html',
  styleUrls: ['./anadir.component.css']
})
export class AnadirComponent  implements OnInit, OnDestroy {
  
  showAdd:boolean=true;
  // hero:Hero={
  //   name:'',
  //   id:0
  // };
  hero:Heroo={
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
  }

  //paramsSubscription: Subscription;

  constructor(private heroService: HeroService,
              private router:Router){

    this.getLastHeroe();

  }  

  ngOnInit() {    
   // this.getLastHeroe();    
  }

  getLastHeroe(){
    this.hero.name = ""; 
    this.showAdd = true;

    this.heroService.getIdLastHero().subscribe(
      heroId => {
          this.hero.id = heroId
      }     
    );    
  }

  addHero():void{
    this.showAdd = false;
    this.heroService.addHeroe(this.hero).subscribe(
      item=> this.router.navigate(['/heroes/herovacio'])
    );
  }

  ngOnDestroy() {
    console.log("DESTROY ANADIR");
  }
}
