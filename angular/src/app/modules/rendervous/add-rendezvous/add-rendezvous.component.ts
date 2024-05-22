import { DispensaireService } from './../../../core/services/dispensaire.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
    private medcinService : DoctorService,
    public dialogRef: MatDialogRef<AddRendezvousComponent>,
    private rendezVousService : RendezvousService,
    private dossierService : DossierService,
    private dispensaireService : DispensaireService
  ) { }
  rvezForm!: FormGroup;
  dossiers:any
  dispensaires : any
  ngOnInit(): void {
    this.getAllDispensaire()
    this.getAllDisMecdin()
    this.getAllDossier()
    this.rvezForm = this.formBuilder.group({
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

  getAllDispensaire(){
    this.dispensaireService.getAll().subscribe(res=>{
      this.dispensaires = res
    })
  }

  onSubmit(){
    this.rendezVousService.rendezvousCreate(this.rvezForm.value).subscribe(res=>{
      console.log(res)
      this.dialogRef.close()
    })
  }
  disDoc:any
  getAllDisMecdin(){
    this.medcinService.disponibiliesMedicin().subscribe(res=>{
      this.disDoc = res
      console.log(res)
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
