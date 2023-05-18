import { Injectable } from '@angular/core';
import { Hero } from '../moduls/hero.interface';
import { HEROES } from '../moduls/mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';


@Injectable({
  providedIn: 'root'
})
export class HeroService {

  heroes:Hero[]=[];

  constructor(private messageService:MessageService) { 
      this.heroes = HEROES;
  }

  getHeroe(id:number):Observable<any> { 
    return of(this.heroes.find(item=>item.id == id));
  }

  getHeroes(mesage:string):Observable<Hero[]>{
    this.messageService.addMessage(mesage + ": fetched heroes");
    return of(this.heroes);
  }

  getIdLastHeroe():Observable<number>{
    return of( this.heroes[this.heroes.length-1].id + 1 );
  }  

  deleteHeroe(id:number):Observable<Hero[]>{
    this.messageService.addMessage("-- Delete Hero id:" + id + " Ok");
    return  of(this.heroes = this.heroes.filter(heroe => heroe.id != id));
  }

  addHeroe(hero:Hero):Observable<any>{
    this.messageService.addMessage("-- Add Hero id:" + hero.id + " Ok");
    return  of( this.heroes.push(hero) );
  }

  updateHeroe(hero:Hero):Observable<void[]>{
    return  of(this.heroes.map(
      (myhero)=>{
        if(myhero.id === hero.id){
           this.messageService.addMessage("-- Update Hero id:" + myhero.id + " Ok");
            myhero.name = hero.name
          };
        }    
      )
    );    
  }  
}
