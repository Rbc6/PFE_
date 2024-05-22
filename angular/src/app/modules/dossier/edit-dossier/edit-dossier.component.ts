import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DossierService } from 'src/app/core/services/dossier.service';
import Swal from 'sweetalert2';
class Dossier {
  id: any;
  nom: any;
  prenom: any;
  cin: any;
  adresse: any;
  genre: any;
  dateNaissance: any;
  email: any;
  telephone: any;
}
@Component({
  selector: 'app-edit-dossier',
  templateUrl: './edit-dossier.component.html',
  styleUrls: ['./edit-dossier.component.scss'],
})
export class EditDossierComponent implements OnInit {
  dossier = new Dossier();
  constructor(
    private dossierService: DossierService,
    public dialogRef: MatDialogRef<EditDossierComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,

  ) {
    this.dossier = data
  }

  ngOnInit(): void {}

  submit() {
    this.dossierService.editDossier(this.dossier ,this.dossier.id).subscribe(
      (res) => {
        console.log(res);
        this.dialogRef.close();
      },
      (err) => {
        Swal.fire({
          title: 'Erreur !',
          text: "quelque chose s'est mal passé.",
          icon: 'error',
          timer: 4000,
          timerProgressBar: true,
          showConfirmButton: false,
        });
      }
    );
  }
}
