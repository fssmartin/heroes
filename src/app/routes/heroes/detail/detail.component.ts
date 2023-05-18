import { Component, OnInit, OnDestroy } from '@angular/core';
import { Hero,Heroo } from 'src/app/moduls/hero.interface';
import { ActivatedRoute, Params } from '@angular/router';
import { HeroService } from '../../../services/hero.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent  implements OnInit, OnDestroy {

  hero:Hero={
    name:'',
    id:0
  };

  heroo:Heroo={
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

  paramsSubscription: Subscription; 

  constructor(private rutaActiva: ActivatedRoute,
    private heroService: HeroService,
    private router:Router){

    this.heroo.id = this.rutaActiva.snapshot.params['id']; 
   
    this.paramsSubscription = this.rutaActiva.params.subscribe(
    // this.rutaActiva.params.subscribe(
      (params: Params) => {  
          this.heroo.id = params['id'] || 0; 
          this.heroService.getHero(this.heroo.id).subscribe( 
              (hero) => { 
                this.heroo.name =  hero.name;     
              }
          ); 
        }
      );
  }  
  
  
  
  updateHero = ()=>{
    this.heroService.updateHeroe(this.heroo).subscribe(
      (heroe)=>{ 
        this.router.navigate(['/heroes/herovacio'])
      }
    )
  }
    

  ngOnInit() {
  }

  ngOnDestroy() {
    console.log("DESTROY DETAIL unsubscribe")
    this.paramsSubscription.unsubscribe(); 
  }
}
