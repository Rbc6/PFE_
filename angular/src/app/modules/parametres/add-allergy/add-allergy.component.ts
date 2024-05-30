import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

import Swal from 'sweetalert2';
import { ParametresService } from 'src/app/core/services/parametres.service';

@Component({
  selector: 'app-add-allergy',
  templateUrl: './add-allergy.component.html',
  styleUrls: ['./add-allergy.component.scss']
})
export class AddAllergyComponent implements OnInit {


  constructor(
    public dialogRef : MatDialogRef<AddAllergyComponent>,
    private formBuilder : FormBuilder,
    private parametresService : ParametresService
  ) { }
  allergieForm!: FormGroup;
  ngOnInit(): void {
    this.allergieForm = this.formBuilder.group({
      allergy :['',Validators.required]
    })
  }
  OnSubmit(){
    if (this.allergieForm.valid) {
      console.log(this.allergieForm.value)
      this.parametresService.createAllergie(this.allergieForm.value).subscribe(res => {
        Swal.fire({
          title: 'Succès !',
          text: 'L\'allergie a été ajouté avec succès.',
          icon: 'success',
          timer: 4000,
          timerProgressBar: true,
          showConfirmButton: false
        }).then(() => {
          this.allergieForm.reset();
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
