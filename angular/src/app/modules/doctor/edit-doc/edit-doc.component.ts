import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DoctorService } from 'src/app/core/services/doctor.service';
import Swal from 'sweetalert2';
class Doctor {
  id:any
  nom: any;
  prenom: any;
  adresse: any;
  numeroTelephone: any;
  email: any;
  specialiteMedicales: any;
}
@Component({
  selector: 'app-edit-doc',
  templateUrl: './edit-doc.component.html',
  styleUrls: ['./edit-doc.component.scss'],
})
export class EditDocComponent implements OnInit {
  specialiteMedicales: any;
  doctor = new Doctor();
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<EditDocComponent>,
    private doctorService: DoctorService
  ) {}
  responseDoc: any;
  ngOnInit(): void {
    this.getAllSpecialites();
    this.doctorService.getMedecinById(this.data.id).subscribe((res) => {
      this.responseDoc = res;

      this.doctor = this.responseDoc;
    });
  }

  getAllSpecialites() {
    this.doctorService.getAllspecialiteMedicale().subscribe((res) => {
      this.specialiteMedicales = res;
    });
  }
  responseDocAdd: any;
  onSubmit() {
    console.log(this.doctor);

    this.doctorService.editDoc(this.doctor , this.doctor.id).subscribe(
      (res) => {
        Swal.fire({
          title: 'Succès !',
          text: 'Le médcin a été ajouté avec succès.',
          icon: 'success',
          timer: 4000,
          timerProgressBar: true,
          showConfirmButton: false,
        }).then(()=>{
          this.dialogRef.close()
        })
      },
      (error) => {
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
