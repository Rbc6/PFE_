import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ParametresService } from 'src/app/core/services/parametres.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-apcis',
  templateUrl: './add-apcis.component.html',
  styleUrls: ['./add-apcis.component.scss']
})
export class AddApcisComponent implements OnInit {

  constructor(public dialogRef : MatDialogRef<AddApcisComponent>,
    private formBuilder : FormBuilder,
    private parametresService : ParametresService) { }
  Form!: FormGroup;
  ngOnInit(): void {  this.Form = this.formBuilder.group({
    apci :['',Validators.required]


  })
  }
  OnSubmit(){
    if (this.Form.valid) {
      console.log(this.Form.value)
      this.parametresService.createApcis(this.Form.value).subscribe(res => {
        Swal.fire({
          title: 'Succès !',
          text: 'L\'APCI a été ajouté avec succès.',
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
