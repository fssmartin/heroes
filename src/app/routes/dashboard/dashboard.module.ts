import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutttRoutingModule } from './dashboard-routing.module'; 
import { DashboardComponent } from './dashboard.component';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    AboutttRoutingModule
  ]
})
export class DashboardModule { }
