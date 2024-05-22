import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RendervousRoutingModule } from './rendervous-routing.module';
import { ClandrierComponent } from './clandrier/clandrier.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { AddRendezvousComponent } from './add-rendezvous/add-rendezvous.component';



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
import { ReactiveFormsModule } from '@angular/forms';
import { AngularSplitModule } from 'angular-split';
import { MatSelectModule } from '@angular/material/select';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ViewRvComponent } from './view-rv/view-rv.component';
import { ConsultationComponent } from './consultation/consultation.component';
import { AlertComponent } from './alert/alert.component';
@NgModule({
  declarations: [
    ClandrierComponent,
    AddRendezvousComponent,
    ViewRvComponent,
    ConsultationComponent,
    AlertComponent
  ],
  imports: [
    CommonModule,
    RendervousRoutingModule,
    FullCalendarModule,


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
    MatSelectModule,
    TableModule,
    ButtonModule

    
  ]
})
export class RendervousModule { }
