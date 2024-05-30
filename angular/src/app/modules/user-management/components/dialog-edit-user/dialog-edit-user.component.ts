import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UsersService } from 'src/app/core/services/users.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-dialog-edit-user',
  templateUrl: './dialog-edit-user.component.html',
  styleUrls: ['./dialog-edit-user.component.scss']
})
export class DialogEditUserComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private userService: UsersService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<DialogEditUserComponent>
  ) { }

  userForm!: FormGroup;
  
  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      id: [this.data.id],
      userName: [this.data.userName],
      firstName: [this.data.firstName, Validators.required],
      lastName: [this.data.lastName, Validators.required],
      email: [this.data.email, [Validators.required, Validators.email]],
      phoneNumber: [this.data.phoneNumber, Validators.required],
      role: [this.data.role],
      password: [this.data.password]
    });
  }

  onSubmit() {
    console.log(this.userForm.value)
    this.userService.updateUser(this.data.id , this.userForm.value).subscribe(res=>{
      Swal.fire({
        title: 'Succès !',
        text: 'L\'utilisateur a été modifié avec succès.',
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
