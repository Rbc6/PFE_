import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ParametresService } from 'src/app/core/services/parametres.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-actes',
  templateUrl: './add-actes.component.html',
  styleUrls: ['./add-actes.component.scss']
})
export class AddActesComponent implements OnInit {

  constructor(public dialogRef : MatDialogRef<AddActesComponent>,
    private formBuilder : FormBuilder,
    private parametresService : ParametresService) { }
  Form!: FormGroup;
  ngOnInit(): void {  this.Form = this.formBuilder.group({
    acteMedical :['',Validators.required]


  })
  }
  OnSubmit(){
    if (this.Form.valid) {
      console.log(this.Form.value)
        this.parametresService.createActesMed(this.Form.value).subscribe(res => {
        Swal.fire({
          title: 'Succès !',
          text: 'L\'acte médical a été ajouté avec succès.',
          icon: 'success',
          timer: 4000,
          timerProgressBar: true,
          showConfirmButton: false
        }).then(() => {
          this.Form.reset();
          this.dialogRef.close()
        })
      }, error => {
        Swal.fire({
          title: 'Erreur !',
          text: "quelque chose s'est mal passé.",
          icon: 'error',
          timer: 4000,
          timerProgressBar: true,
          showConfirmButton: false
        });
      })
    } else {
      Swal.fire({
        title: 'Erreur !',
        text: 'Veuillez remplir tous les champs requis correctement.',
        icon: 'error',
        timer: 4000,
        timerProgressBar: true,
        showConfirmButton: false
      });
    }
  }

}
