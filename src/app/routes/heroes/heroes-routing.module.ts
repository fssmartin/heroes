import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes.component';
import { DetailComponent } from './detail/detail.component';
import { AnadirComponent } from './anadir/anadir.component';
import { EmptyComponent } from './empty/empty.component';

const routes: Routes = [
  {   path: '', component: HeroesComponent ,
      children: [
        {
          path: 'anadir',  
          component: AnadirComponent,
        },
        {
          path: 'herovacio',  
          component: EmptyComponent,
        },
        {
          path: 'detail/:id',
          component: DetailComponent,
        }
      ],

    },
    { path: '**', component: HeroesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule { }
