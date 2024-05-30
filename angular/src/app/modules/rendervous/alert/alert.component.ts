import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RendezvousService } from 'src/app/core/services/rendezvous.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {

  constructor(
    private rendezvousService : RendezvousService,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.getAlert()
  }

  getAlert(){
    this.rendezvousService.getAllAlert().subscribe(res=>{
      this.alerts = res
      console.log(res)
    })
  }
  alerts:any


  goTo(id:any){
    const url = "view-dossier/"+id
    this.router.navigateByUrl(url)
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
        this.rendezvousService.deleteAlert(item).subscribe(res => {
          Swal.fire({
            title: "Supprimé !",
            text: "L'alert a été supprimé.",
            icon: "success"
          }).then(() => {
            this.getAlert()
          })
        })
      }
    });
  }
}
