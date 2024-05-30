import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParametresRoutingModule } from './parametres-routing.module';
import { ListParametresComponent } from './list-parametres/list-parametres.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { AddAllergyComponent } from './add-allergy/add-allergy.component';
import { FormModule } from '../form/form.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ListAllergyComponent } from './list-allergy/list-allergy.component';
import { TableModule } from 'primeng/table';
import { MatTable, MatTableModule } from '@angular/material/table';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ButtonModule } from 'primeng/button';
import { ListApcisComponent } from './list-apcis/list-apcis.component';
import { AddApcisComponent } from './add-apcis/add-apcis.component';
import { AddActesComponent } from './add-actes/add-actes.component';
import { AddRadioComponent } from './add-radio/add-radio.component';
import { AddBioComponent } from './add-bio/add-bio.component';
import { AddParamedicalComponent } from './add-paramedical/add-paramedical.component';
import { AddMedicamentComponent } from './add-medicament/add-medicament.component';
import { ListMedicamentComponent } from './list-medicament/list-medicament.component';
import { ListParamedicalComponent } from './list-paramedical/list-paramedical.component';
import { ListBioComponent } from './list-bio/list-bio.component';
import { ListRadioComponent } from './list-radio/list-radio.component';
import { ListActesComponent } from './list-actes/list-actes.component';



@NgModule({
  declarations: [
    ListParametresComponent,
    AddAllergyComponent,
    ListAllergyComponent,
    ListApcisComponent,
    AddApcisComponent,
    AddActesComponent,
    AddRadioComponent,
    AddBioComponent,
    AddParamedicalComponent,
    AddMedicamentComponent,
    ListMedicamentComponent,
    ListParamedicalComponent,
    ListBioComponent,
    ListRadioComponent,
    ListActesComponent,
    
  ],
  imports: [
    CommonModule,
    ParametresRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatMenuModule,
    MatPaginatorModule,
    MatTooltipModule,
    ButtonModule,
    FormModule,
    ReactiveFormsModule,
    MatTableModule,
    TableModule
    
    
  ]
})
export class ParametresModule { }
