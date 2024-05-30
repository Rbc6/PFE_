import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AddAllergyComponent } from '../add-allergy/add-allergy.component';
import { ListAllergyComponent } from '../list-allergy/list-allergy.component';
import { ListMedicamentComponent } from '../list-medicament/list-medicament.component';
import { AddMedicamentComponent } from '../add-medicament/add-medicament.component';
import { ListParamedicalComponent } from '../list-paramedical/list-paramedical.component';
import { AddParamedicalComponent } from '../add-paramedical/add-paramedical.component';
import { ListBioComponent } from '../list-bio/list-bio.component';
import { AddBioComponent } from '../add-bio/add-bio.component';
import { ListRadioComponent } from '../list-radio/list-radio.component';
import { AddRadioComponent } from '../add-radio/add-radio.component';
import { ListActesComponent } from '../list-actes/list-actes.component';
import { AddActesComponent } from '../add-actes/add-actes.component';
import { ListApcisComponent } from '../list-apcis/list-apcis.component';
import { AddApcisComponent } from '../add-apcis/add-apcis.component';

@Component({
  selector: 'app-list-parametres',
  templateUrl: './list-parametres.component.html',
  styleUrls: ['./list-parametres.component.scss']
})
export class ListParametresComponent implements OnInit {



  constructor(
    private router : Router,
    private dialog: MatDialog,) { }

  ngOnInit(): void {
  }
  OpenAddAllergyDialog() {
      const dialogRef = this.dialog.open(AddAllergyComponent,{});
    }

    OpenListAllergyDialog() {
      const dialogRef = this.dialog.open(ListAllergyComponent,{});
      }

      OpenListMedDialog() {
        const dialogRef = this.dialog.open(ListMedicamentComponent,{});
        }
        OpenAddMedDialog() {
          const dialogRef = this.dialog.open(AddMedicamentComponent,{});
        }
        OpenListParaMedDialog() {
          const dialogRef = this.dialog.open(ListParamedicalComponent,{});
        }
        OpenAddParaMedDialog() {
          const dialogRef = this.dialog.open(AddParamedicalComponent,{});
        }
        OpenListBioDialog() {
          const dialogRef = this.dialog.open(ListBioComponent,{});
        }
        OpenAddBioDialog() {
          const dialogRef = this.dialog.open(AddBioComponent,{});
        }
        OpenListRadioDialog() {
          const dialogRef = this.dialog.open(ListRadioComponent,{});
        }
        OpenAddRadioDialog() {
          const dialogRef = this.dialog.open(AddRadioComponent,{});
        }
        OpenListActeDialog() {
          const dialogRef = this.dialog.open(ListActesComponent,{});
        }
        OpenAddActeDialog() {
          const dialogRef = this.dialog.open(AddActesComponent,{});
        }
        OpenListAPCIDialog() {
          const dialogRef = this.dialog.open(ListApcisComponent,{});
        }
        OpenAddAPCIDialog() {
          const dialogRef = this.dialog.open(AddApcisComponent,{});
        }
        
}
