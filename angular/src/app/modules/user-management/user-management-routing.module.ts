import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeUserComponent } from './components/liste-user/liste-user.component';
import { ViewUserComponent } from './components/view-user/view-user.component';
import { DispensaireComponent } from './components/dispensaire/dispensaire.component';

const routes: Routes = [
  { path: 'liste-user', component: ListeUserComponent },
  { path: 'liste-dispensaire', component: DispensaireComponent },
  { path: 'view-user', component: ViewUserComponent },
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

export class UserManagementRoutingModule { }
