import { Component, OnInit } from '@angular/core';
import { ParametresService } from 'src/app/core/services/parametres.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-radio',
  templateUrl: './list-radio.component.html',
  styleUrls: ['./list-radio.component.scss']
})
export class ListRadioComponent implements OnInit {

  radios : any
  constructor(
    private parametresService : ParametresService
  ) { }

  ngOnInit(): void {
    this.getAllRadio()
  }
  
  getAllRadio(){
    this.parametresService.getAllradio().subscribe(res=>{
      this.radios = res
      console.log(this.radios)
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
        this.parametresService.deleteradio(item).subscribe(res => {
          Swal.fire({
            title: "Supprimé !",
            text: "L'examen radiologique a été supprimé.",
            icon: "success"
          }).then(() => {
            this.getAllRadio()
          })
        })
      }
    });
  }
}
