import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListDoctorComponent } from './list-doctor/list-doctor.component';



const routes: Routes = [
  { path: 'liste-doctor', component: ListDoctorComponent },

];

@NgModule({
    imports: [
      RouterModule.forChild(routes)
    ],
    exports: [
      RouterModule
    ]
  })

export class DoctorRoutingModule { }