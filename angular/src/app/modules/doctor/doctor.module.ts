import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListDoctorComponent } from './list-doctor/list-doctor.component';
import { DoctorRoutingModule } from './doctor.routing';
import { MatTableModule} from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { MatIconModule} from '@angular/material/icon';
import { MatButtonModule} from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule} from '@angular/material/dialog';
import { MatRadioModule} from '@angular/material/radio';
import { MatCheckboxModule} from '@angular/material/checkbox';
import { MatTooltipModule} from '@angular/material/tooltip';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularSplitModule } from 'angular-split';
import { MatSelectModule } from '@angular/material/select';

import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { JoursComponent } from './jours/jours.component';
import { AddDocComponent } from './add-doc/add-doc.component';
import { EditDocComponent } from './edit-doc/edit-doc.component';

@NgModule({
  declarations: [
    ListDoctorComponent,
    JoursComponent,
    AddDocComponent,
    EditDocComponent
  ],
  imports: [
    CommonModule,
    DoctorRoutingModule,
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
    AngularSplitModule,
    MatSelectModule,
    FormsModule,
    TableModule,
    ButtonModule,
    FormsModule
  ]
})
export class DoctorModule { }
