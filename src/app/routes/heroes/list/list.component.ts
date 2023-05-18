import { Component, OnDestroy, OnInit } from '@angular/core'; 
import { Input, Output, EventEmitter } from '@angular/core';
import { Hero, Heroo } from '../../../moduls/hero.interface'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent  implements  OnDestroy {

  @Input() heroes:Heroo[]=[];

  @Output() AuxselectHero = new EventEmitter<Heroo>();
  
  selectHero:Heroo={
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


  onDelete(heroe:Heroo):void { 
    this.selectHero = heroe;  
    this.AuxselectHero.emit(heroe); 
  }
  
  // onSelect(heroe:Hero):void { 
  //   this.selectHero = heroe;  
  //   this.AuxselectHero.emit({name:'',id:0}); 
  // }
  
  // showDetail(){
  //   this.AuxselectHero.emit(this.selectHero);      
  // }

  ngOnDestroy() {
    console.log("DESTROY LISTA HIJA") 
  }

}
