import { Component, OnInit } from '@angular/core';
import { ParametresService } from 'src/app/core/services/parametres.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-paramedical',
  templateUrl: './list-paramedical.component.html',
  styleUrls: ['./list-paramedical.component.scss']
})
export class ListParamedicalComponent implements OnInit {

  paramedical : any
  constructor(
    private parametresService : ParametresService
  ) { }

  ngOnInit(): void {
    this.getAllParaMed()
  }
  
  getAllParaMed(){
    this.parametresService.getAllParamedical().subscribe(res=>{
      this.paramedical = res
      console.log(this.paramedical)
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
        this.parametresService.deleteParamedical(item).subscribe(res => {
          Swal.fire({
            title: "Supprimé !",
            text: "Le paramédical a été supprimé.",
            icon: "success"
          }).then(() => {
            this.getAllParaMed()
          })
        })
      }
    });
  }
}
