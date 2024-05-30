import { Component, OnInit } from '@angular/core';
import { ParametresService } from 'src/app/core/services/parametres.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-apcis',
  templateUrl: './list-apcis.component.html',
  styleUrls: ['./list-apcis.component.scss']
})
export class ListApcisComponent implements OnInit {
  apcis : any
  constructor(
    private parametresService : ParametresService
  ) { }

  ngOnInit(): void {
    this.getAllApcis()
  }
  
  getAllApcis(){
    this.parametresService.getAllApcis().subscribe(res=>{
      this.apcis = res
      console.log(this.apcis)
    })
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
        this.parametresService.deleteApcis(item).subscribe(res => {
          Swal.fire({
            title: "Supprimé !",
            text: "L'APCI a été supprimé.",
            icon: "success"
          }).then(() => {
            this.getAllApcis()
          })
        })
      }
    });
  }

}
