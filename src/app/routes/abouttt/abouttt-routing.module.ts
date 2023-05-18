import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutttComponent } from './abouttt.component';

const routes: Routes = [{ path: '', component: AboutttComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutttRoutingModule { }
