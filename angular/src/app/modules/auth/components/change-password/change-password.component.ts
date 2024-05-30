import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UsersService } from 'src/app/core/services/users.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  passForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private userService : UsersService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<ChangePasswordComponent>
  ) { }

  ngOnInit(): void {
    

    this.passForm = this.formBuilder.group({
      id: [this.data.id],
      userName: [this.data.userName],
      firstName: [this.data.firstName, Validators.required],
      lastName: [this.data.lastName, Validators.required],
      email: [this.data.email, [Validators.required, Validators.email]],
      phoneNumber: [this.data.phoneNumber, Validators.required],
      role: [this.data.role],
      password: ['',Validators.required],
      repeatPassword: ['', Validators.required]
    }, {
      validators: this.passwordsMatch('password', 'repeatPassword')
    });
    console.log(this.passForm.value)
  }


// Fonction pour comparer les mots de passe
passwordsMatch(controlName: string, matchingControlName: string) {
  return (formGroup: FormGroup) => {
    const control = formGroup.controls[controlName];
    const matchingControl = formGroup.controls[matchingControlName];

    if (matchingControl.errors &&!matchingControl.errors.mustMatch) {
      
      delete matchingControl.errors.mustMatch;
    }

    if (control.value!== matchingControl.value &&!matchingControl.hasError('mustMatch')) {
    
      matchingControl.setErrors({ mustMatch: true });
    } else if (control.value === matchingControl.value && matchingControl.hasError('mustMatch')) {
     
      matchingControl.setErrors({});
    }
  };
}


  submitForm() {
    console.log(this.passForm.value)
    this.userService.updateUser(this.data.id , this.passForm.value).subscribe(res=>{
      Swal.fire({
        title: 'Succès !',
        text: 'Mot de passe modifié avec succès.',
        icon: 'success',
        timer: 4000,
        timerProgressBar: true,
        showConfirmButton: false
      }).then(()=>{
        this.dialogRef.close()
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

