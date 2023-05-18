import { Component, OnDestroy, OnInit } from '@angular/core'; 
import { Input, Output, EventEmitter } from '@angular/core';
import { Hero } from '../../../moduls/hero.interface'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent  implements  OnDestroy {

  @Input() heroes:Hero[]=[{name:'',id:0}];
  @Output() AuxselectHero = new EventEmitter<Hero>();
  
  selectHero:Hero={name:'',id:0};


  onDelete(heroe:Hero):void { 
    this.selectHero = heroe;  
    this.AuxselectHero.emit(this.selectHero); 
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
