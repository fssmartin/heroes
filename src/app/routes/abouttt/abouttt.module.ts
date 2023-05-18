import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutttRoutingModule } from './abouttt-routing.module';
import { AboutttComponent } from './abouttt.component';


@NgModule({
  declarations: [
    AboutttComponent
  ],
  imports: [
    CommonModule,
    AboutttRoutingModule
  ]
})
export class AboutttModule { }
