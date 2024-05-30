import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListParametresComponent } from './list-parametres/list-parametres.component';

const routes: Routes = [
  {path : 'list-parametres',component : ListParametresComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametresRoutingModule { }
