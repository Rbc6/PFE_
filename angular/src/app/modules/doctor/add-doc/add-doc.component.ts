import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { DoctorService } from 'src/app/core/services/doctor.service';
import Swal from 'sweetalert2';
class Doctor {
  nom: any;
  prenom: any;
  adresse: any;
  numeroTelephone: any;
  email: any;
  specialiteMedicales: any;
}
@Component({
  selector: 'app-add-doc',
  templateUrl: './add-doc.component.html',
  styleUrls: ['./add-doc.component.scss'],
})
export class AddDocComponent implements OnInit {
  specialiteMedicales: any;
  doctor = new Doctor();
  constructor(
    public dialogRef: MatDialogRef<AddDocComponent>,
    private doctorService: DoctorService
  ) {}

  ngOnInit(): void {
    this.getAllSpecialites();
  }

  getAllSpecialites() {
    this.doctorService.getAllspecialiteMedicale().subscribe((res) => {
      this.specialiteMedicales = res;
    });
  }
  responseDocAdd: any;
  onSubmit() {
    console.log(this.doctor);

    this.doctorService.createDoc(this.doctor).subscribe(
      (res) => {
        Swal.fire({
          title: 'Succès !',
          text: 'Le médcin a été ajouté avec succès.',
          icon: 'success',
          timer: 4000,
          timerProgressBar: true,
          showConfirmButton: false,
        }).then(() => {
          this.responseDocAdd = res;
          const obj = {
            idMedcin: this.responseDocAdd.id,
            joursEnums: [],
          };
          this.doctorService.createDispo(obj).subscribe((res) => {
            this.dialogRef.close();
            this.doctor = new Doctor();
          });
        });
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
