import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroesComponent } from './heroes.component';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { FormsModule } from '@angular/forms';
import { AnadirComponent } from './anadir/anadir.component';


@NgModule({
  declarations: [
    HeroesComponent,
    ListComponent,
    DetailComponent,
    AnadirComponent
  ],
  imports: [
    FormsModule,
    CommonModule, 
    HeroesRoutingModule
  ],
  exports:[ 
    
  ]
})
export class HeroesModule { }
