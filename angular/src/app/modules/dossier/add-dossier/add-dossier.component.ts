import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { DispensaireService } from 'src/app/core/services/dispensaire.service';
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
  disponsaireId:any
}
@Component({
  selector: 'app-add-dossier',
  templateUrl: './add-dossier.component.html',
  styleUrls: ['./add-dossier.component.scss'],
})
export class AddDossierComponent implements OnInit {
  dossier = new Dossier();
  constructor(
    private dossierService: DossierService ,
    public dialogRef: MatDialogRef<AddDossierComponent>,
    private dispensaireService : DispensaireService
  ) {}
  dispensaires:any
  ngOnInit(): void {
    this.getAllDisponsaire()
  }
  getAllDisponsaire(){
    this.dispensaireService.getAll().subscribe(res=>{
      this.dispensaires = res
    })
  }
  submit() {
    this.dossierService.saveDossier(this.dossier).subscribe(
      (res) => {
        console.log(res);
        this.dialogRef.close()
      },
      (err)=> {
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
