import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListDossierComponent } from './list-dossier/list-dossier.component';
import { AddDossierComponent } from './add-dossier/add-dossier.component';
import { EditDossierComponent } from './edit-dossier/edit-dossier.component';
import { DossierRoutingModule } from './dossier.routing';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularSplitModule } from 'angular-split';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ViewsDossierComponent } from './views-dossier/views-dossier.component';
import { DisplayImageComponent } from './display-image/display-image.component';



@NgModule({
  declarations: [
    ListDossierComponent,
    AddDossierComponent,
    EditDossierComponent,
    ViewsDossierComponent,
    DisplayImageComponent
  ],
  imports: [
    CommonModule,
    DossierRoutingModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatPaginatorModule,
    MatDialogModule,
    MatRadioModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatCardModule,
    ReactiveFormsModule,
    AngularSplitModule ,

    TableModule,
    ButtonModule,
    FormsModule
  ]
})
export class DossierModule { }
