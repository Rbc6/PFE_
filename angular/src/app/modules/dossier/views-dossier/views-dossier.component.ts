import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DossierService } from 'src/app/core/services/dossier.service';
import { DomSanitizer } from '@angular/platform-browser';
import Swal from 'sweetalert2';
import { MatDialog } from '@angular/material/dialog';
import { DisplayImageComponent } from '../display-image/display-image.component';
import { RendezvousService } from 'src/app/core/services/rendezvous.service';
import { EditDossierComponent } from '../edit-dossier/edit-dossier.component';
@Component({
  selector: 'app-views-dossier',
  templateUrl: './views-dossier.component.html',
  styleUrls: ['./views-dossier.component.scss']
})
export class ViewsDossierComponent implements OnInit {
  id = this.route.snapshot.params["id"]
  image:any
  constructor(
    private route : ActivatedRoute,
    private dossierService : DossierService,
    private _sanitizer : DomSanitizer,
    private dialog: MatDialog,
    private rendezvousService : RendezvousService,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.getDossierByID()
    this.getImageByID()
    this.getRenvezVous()
  }
  dossier : any
  getDossierByID(){
    this.dossierService.getDossierById(this.id).subscribe(res=>{
      this.dossier = res
      console.log(this.dossier);

    })
  }
  rendezvous:any
  getRenvezVous(){
    this.rendezvousService.getAllRendezVousByDossier(this.id).subscribe(res=>{
      this.rendezvous = res
      console.log(res);

    })
  }
  show = false
  affectDisponsaire(){
    this.show = true
  }

  convert(base64String : any){
    return this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,'+base64String);
  }

  imageTodisplay:any
  getImageByID(){
    this.dossierService.getImageById(this.id).subscribe(res=>{
      const response : any = res
      this.imageTodisplay = res
      if(response == null){
        this.image = "assets/images/pict-user.jpg"
      }else{
        this.image = this.convert(response.image)
      }


    })
  }
  selecetdFile:any
  onFileUpload(event: any) {
    this.selecetdFile = event.target.files[0];
    const fd = new FormData();
    fd.append("image", this.selecetdFile, this.selecetdFile.name)

    this.dossierService.saveImage(fd , this.id).subscribe(res=>{
      window.location.reload()
    })
  }

  displayImage(){
    this.dialog.open(DisplayImageComponent, {
      data: this.image
    });

  }

  capitalizeFirstLetter(str: string): string {
    if(str)
     return str?.charAt(0).toUpperCase() + str.slice(1);
  }

  openDialogEdit() {
    const dialogRef = this.dialog.open(EditDossierComponent, {
      data: this.dossier
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getDossierByID()
      this.getImageByID()
      this.getRenvezVous()
    });
  }

  goToConsultation(id:any){
    const url = "consultations/"+id
    this.router.navigateByUrl(url)
  }
  delete(id :any){
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
        this.dossierService.deleteDossier(id).subscribe(res => {
          Swal.fire({
            title: "Supprimé !",
            text: "Le dossier a été supprimé.",
            icon: "success"
          }).then(() => {
            this.router.navigate(['/liste-dossier'])
          })
        })
      }
    });
  }
}
