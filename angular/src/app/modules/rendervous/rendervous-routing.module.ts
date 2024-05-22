import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClandrierComponent } from './clandrier/clandrier.component';
import { AlertComponent } from './alert/alert.component';

const routes: Routes = [
     {path : 'calendrier' , component : ClandrierComponent},
     {path : 'alert' , component : AlertComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RendervousRoutingModule { }
