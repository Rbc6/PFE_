import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDossierComponent } from './add-dossier/add-dossier.component';
import { ListDossierComponent } from './list-dossier/list-dossier.component';
import { ViewsDossierComponent } from './views-dossier/views-dossier.component';
import { ConsultationComponent } from '../rendervous/consultation/consultation.component';


const routes: Routes = [
  { path: 'liste-dossier', component: ListDossierComponent },
  { path: 'view-dossier/:id', component: ViewsDossierComponent },
  { path: 'consultations/:id', component: ConsultationComponent },
  { path: 'add-dossier', component: AddDossierComponent },
  { path: '', redirectTo: 'liste-user', pathMatch: 'full' },
];

@NgModule({
    imports: [
      RouterModule.forChild(routes)
    ],
    exports: [
      RouterModule
    ]
  })

export class DossierRoutingModule { }
