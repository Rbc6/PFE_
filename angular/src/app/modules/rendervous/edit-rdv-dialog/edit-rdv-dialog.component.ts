import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UsersService } from 'src/app/core/services/users.service';
import { DialogEditUserComponent } from '../../user-management/components/dialog-edit-user/dialog-edit-user.component';
import { RendezvousService } from 'src/app/core/services/rendezvous.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-rdv-dialog',
  templateUrl: './edit-rdv-dialog.component.html',
  styleUrls: ['./edit-rdv-dialog.component.scss']
})
export class EditRdvDialogComponent implements OnInit {
  rdvForm : FormGroup
  
  constructor( private formBuilder: FormBuilder,
   private rdvService :RendezvousService,
   private router : Router,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<DialogEditUserComponent>) { }

  ngOnInit(): void {
      
      this.rdvForm = this.formBuilder.group({
        id: [this.data.id],
        dateTime: [this.data.dateTime],
        duree: [this.data.duree],
        typeRendezVous: [this.data.typeRendezVous],
        numeroDossier: [this.data.dossier.numero],
        idDisMedcin: [this.data.disponibiliesMedecin.id],
        disponsaireId: [this.data.dispensaire.id],
        motif: [this.data.motif],
        statut: [this.data.statut]
      });
      console.log(this.data)

  }

  onSubmit() {
    console.log(this.rdvForm.value)
    this.rdvService.rendezvousUpdate(this.data.id , this.rdvForm.value).subscribe(res=>{
      Swal.fire({
        title: 'Succès !',
        text: 'Le rendez-vous a été modifié avec succès.',
        icon: 'success',
        timer: 4000,
        timerProgressBar: true,
        showConfirmButton: false
      }).then(()=>{
        this.dialogRef.close()
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.router.onSameUrlNavigation = 'reload';
      this.router.navigate([this.router.url]);
      })
    },error=>{
      Swal.fire({
        title: 'Erreur !',
        text: "quelque chose s'est mal passé.",
        icon: 'error',
        timer: 4000,
        timerProgressBar: true,
        showConfirmButton: false
      });
    })
  }

}
