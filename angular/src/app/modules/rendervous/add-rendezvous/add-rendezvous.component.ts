import { DispensaireService } from './../../../core/services/dispensaire.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { DoctorService } from 'src/app/core/services/doctor.service';
import { DossierService } from 'src/app/core/services/dossier.service';
import { RendezvousService } from 'src/app/core/services/rendezvous.service';
@Component({
  selector: 'app-add-rendezvous',
  templateUrl: './add-rendezvous.component.html',
  styleUrls: ['./add-rendezvous.component.scss']
})
export class AddRendezvousComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private medecinService : DoctorService,
    public dialogRef: MatDialogRef<AddRendezvousComponent>,
    private rendezVousService : RendezvousService,
    private dossierService : DossierService,
    private dispensaireService : DispensaireService
  ) { }

  rvForm!: FormGroup;
  dossiers:any
  dispensaires : any
  

  ngOnInit(): void {
    
    this.getAllDispensaire()
    this.getAllDossier()
   
    this.rvForm = this.formBuilder.group({
      dateTime: [''],
      duree: [''],
      typeRendezVous: [''],
      numeroDossier: [],
      idDisMedcin: [''],
      disponsaireId: [''],
      motif: [''],
      statut: ['EN_COURS', ]
    });
  }

  selectedDate: Date;
  dayOfWeek : any
  getDayOfWeek(date: Date): string {
    const days = ['DIMANCHE', 'LUNDI', 'MARDI', 'MERCREDI', 'JEUDI', 'VENDREDI', 'SAMEDI'];
    return days[date.getDay()];
  }
  disDoc:any
  onDateTimeChange(dateTimeValue: string) {
    this.selectedDate = new Date(dateTimeValue);
    this.dayOfWeek = this.getDayOfWeek(this.selectedDate);

    console.log('Jour de la semaine :', this.dayOfWeek);
    this.medecinService.disponibiliesMedecin().subscribe(res=>{
      this.disDoc = res
      this.disDoc = this.disDoc.filter(medecin => {
        return medecin.jours.some(jour => jour.label === this.dayOfWeek);
      });
      console.log('Médecins travaillant le', this.dayOfWeek, ':', this.disDoc);
    });
  }
 

  getAllDispensaire(){
    this.dispensaireService.getAll().subscribe(res=>{
      this.dispensaires = res
    })
  }

  onSubmit(){
    this.rendezVousService.rendezvousCreate(this.rvForm.value).subscribe(res=>{
      console.log(res)
      this.dialogRef.close()
    })
  }
 

  getAllDossier(){
    this.dossierService.getAllDossiers().subscribe(res=>{
      this.dossiers = res
      console.log(res)
    })
  }
  create(){}

}
