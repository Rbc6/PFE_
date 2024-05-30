import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DoctorService } from 'src/app/core/services/doctor.service';

@Component({
  selector: 'app-jours',
  templateUrl: './jours.component.html',
  styleUrls: ['./jours.component.scss']
})
export class JoursComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<JoursComponent>,
    private doctorService : DoctorService
  ) { }


  jours: { nom: string, checked: boolean }[] = [
    { nom: 'LUNDI', checked: false },
    { nom: 'MARDI', checked: false },
    { nom: 'MERCREDI', checked: false },
    { nom: 'JEUDI', checked: false },
    { nom: 'VENDREDI', checked: false },
    { nom: 'SAMEDI', checked: false },
    { nom: 'DIMANCHE', checked: false }
  ];

  ngOnInit(): void {
   this.getDisponibiliteByMedcin()

  }
  disponibilite:any
  getDisponibiliteByMedcin(){
    this.doctorService.getAlldisponibiliteByMedcin(this.data.id).subscribe(res=>{
      this.disponibilite = res
      console.log(res);

      if(this.disponibilite.jours.length > 0){
        this.jours.map((i:any)=>{
          this.disponibilite.jours.map((j:any)=>{


            if(i.nom === j.label){
              i.checked = true
            }
          })
        })
      }
      console.log(this.jours);

    })
  }
  joursDispo = []
  submit(){
    console.log(this.jours);
    this.jours.map((i:any)=>{
      if(i.checked){
        this.joursDispo.push(i.nom)
      }
    })




    this.doctorService.createDispoJour(this.joursDispo , this.data.id).subscribe(res=>{
      this.dialogRef.close()
    })
    const joursNonDispo = this.jours.filter((i: any) => !i.checked).map((i: any) => i.nom);
    this.doctorService.DeleteDispoJour(joursNonDispo,this.data.id).subscribe(res=>{
      this.dialogRef.close()
    })




  }

}
