import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DoctorService } from 'src/app/core/services/doctor.service';
import { JoursComponent } from '../jours/jours.component';
import { AddDocComponent } from '../add-doc/add-doc.component';
import { EditDocComponent } from '../edit-doc/edit-doc.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-doctor',
  templateUrl: './list-doctor.component.html',
  styleUrls: ['./list-doctor.component.scss']
})
export class ListDoctorComponent implements OnInit {

  constructor(
    private doctorService : DoctorService,
    private dialog: MatDialog,
  ) { }
  doctors:any
  ngOnInit(): void {
    this.getAllDoctor()
  }

  getAllDoctor(){
    this.doctorService.getAllDoctor().subscribe(res=>{
      this.doctors = res
      console.log(res);

    })
  }

  openDialogJours(data: any) {
    const dialogRef = this.dialog.open(JoursComponent, {
      data: data
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getAllDoctor()
    });
  }

  capitalizeFirstLetter(str: string): string {
    return str?.charAt(0).toUpperCase() + str.slice(1);
  }


  openDialogAddDoc() {
    const dialogRef = this.dialog.open(AddDocComponent, {
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getAllDoctor()
    });
  }


  openDialogEditDoc(data: any) {
    const dialogRef = this.dialog.open(EditDocComponent, {
      data: data
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getAllDoctor()
    });
  }


  delete(item: any) {
    Swal.fire({
      title: "Êtes-vous sûr(e) ?",
      text: "Vous ne pourrez pas revenir en arrière !",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Oui, supprimer !"
    }).then((result) => {
      if (result.isConfirmed) {
        this.doctorService.delete(item).subscribe(res => {
          Swal.fire({
            title: "Supprimé !",
            text: "Le medcin a été supprimé.",
            icon: "success"
          }).then(() => {
            this.getAllDoctor()
          })
        })
      }
    });
  }
  search(value: string) {
    if (!value.trim()) {
      this.getAllDoctor();
      return;
    }

    this.doctors = this.doctors.filter(doctor =>
      doctor.name.toLowerCase().includes(value.toLowerCase()) 
    );
  }

}
