import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { HomeComponent } from './core/home/home.component';

const routes: Routes = [ 

  { path: '', redirectTo: 'heroes', pathMatch: 'full' },
  { path: 'about', loadChildren: () => import('./routes/abouttt/abouttt.module').then(m => m.AboutttModule) }, 
  { path: 'heroes', loadChildren: () => import('./routes/heroes/heroes.module').then(m => m.HeroesModule) },
  { path: 'dashb', loadChildren: () => import('./routes/dashboard/dashboard.module').then(m => m.DashboardModule) }, 
  { path: '**', redirectTo: 'dashb', pathMatch: 'full' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
