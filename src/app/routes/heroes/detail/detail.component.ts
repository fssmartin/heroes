import { Component, OnInit, OnDestroy } from '@angular/core';
import { Hero } from 'src/app/moduls/hero.interface';
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

  paramsSubscription: Subscription; 

  constructor(private rutaActiva: ActivatedRoute,
    private heroService: HeroService,
    private router:Router){

    this.hero.id = this.rutaActiva.snapshot.params['id']; 
   
    this.paramsSubscription = this.rutaActiva.params.subscribe(
    // this.rutaActiva.params.subscribe(
      (params: Params) => {  
          this.hero.id = params['id'] || 0; 
          this.heroService.getHeroe(this.hero.id).subscribe( 
              hero => {
                this.hero = {
                  name :  hero.name,
                  id :  hero.id
                }
              }
          ); 
        }
      );
  }  
  
  
  
  updateHero = (hero:Hero)=>{
    this.heroService.updateHeroe(hero).subscribe(
      (heroe)=>{
        this.hero=hero;
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
