import { Component, OnInit } from '@angular/core';
import { ParametresService } from 'src/app/core/services/parametres.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-actes',
  templateUrl: './list-actes.component.html',
  styleUrls: ['./list-actes.component.scss']
})
export class ListActesComponent implements OnInit {

  actes : any
  constructor(
    private parametresService : ParametresService
  ) { }

  ngOnInit(): void {
    this.getAllActes()
  }
  
  getAllActes(){
    this.parametresService.getAllActesMed().subscribe(res=>{
      this.actes = res
      console.log(this.actes)
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
        this.parametresService.deleteActesMed(item).subscribe(res => {
          Swal.fire({
            title: "Supprimé !",
            text: "L'acte a été supprimé.",
            icon: "success"
          }).then(() => {
            this.getAllActes()
          })
        })
      }
    });
  }
}
