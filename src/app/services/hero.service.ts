import { Injectable } from '@angular/core';
import { Hero, Heroo } from '../moduls/hero.interface';
import { HEROES } from '../moduls/mock-heroes';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  heroes:Hero[]=[];
  heroess:Heroo[]=[];  
  heroee:Heroo={
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

  private heroesUrl = 'https://jsonplaceholder.typicode.com/users';
  
  constructor(
      private messageService:MessageService,
      private http: HttpClient) { 
      //this.heroes = HEROES; 
  }

  getHero(id:number):Observable<Heroo> { 
    //return of(this.heroess.find(item=>item.id == id));
    let that = this;
    return this.http.get<Heroo>(this.heroesUrl+"/"+id).pipe(
      tap(_ => this.messageService.addMessage(' get Http Heore ' +id ) ),      
      catchError(this.handleError<Heroo>('getHeroes', this.heroee))
    );

  }

  getHeroes(mesage:string):Observable<Heroo[]>{
//    this.messageService.addMessage(mesage + ": fetched heroes");
    return this.http.get<Heroo[]>(this.heroesUrl).pipe(
      tap(_ => this.messageService.addMessage(mesage + ' get Http') ),      
      tap( items => this.heroess = items ),
      catchError(this.handleError<Heroo[]>('getHeroes', []))
    );
    //return of(this.heroes);
  }

  getIdLastHero():Observable<number>{
    return of( this.heroess[this.heroess.length-1].id + 1 );
  }  

  deleteHero(id:number):Observable<Heroo[]>{
    this.messageService.addMessage("-- Delete Hero id:" + id + " Ok");
    return  of(this.heroess = this.heroess.filter(heroe => heroe.id != id));
  }

  addHeroe(hero:Heroo):Observable<any>{
    this.messageService.addMessage("-- Add Hero id:" + hero.id + " Ok");     
    return  of( this.heroess.push(hero) );
  }

  updateHeroe(hero:Heroo):Observable<void[]>{
    console.log(hero.id)
    return  of(this.heroess.map(
      (myhero)=>{
        console.log(myhero.id + "__" + hero.id)
        if(myhero.id === hero.id){
          console.log("Entro ???")
            this.messageService.addMessage("-- Update Hero id:" + myhero.id + " Ok");
            myhero.name = hero.name
          };
        }    
      )
    );    
  }  

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      //console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      //this.log(`${operation} failed: ${error.message}`);
      this.messageService.addMessage(`-- ${operation} -- failed: \n\n ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
