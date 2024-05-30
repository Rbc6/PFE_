import { Component, OnInit } from '@angular/core';
import { ParametresService } from 'src/app/core/services/parametres.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-medicament',
  templateUrl: './list-medicament.component.html',
  styleUrls: ['./list-medicament.component.scss']
})
export class ListMedicamentComponent implements OnInit {

  medicament : any
  constructor(
    private parametresService : ParametresService
  ) { }

  ngOnInit(): void {
    this.getAllMedicaments()
  }
  
  getAllMedicaments(){
    this.parametresService.getAllMedicaments().subscribe(res=>{
      this.medicament = res
      console.log(this.medicament)
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
        this.parametresService.deleteMedicaments(item).subscribe(res => {
          Swal.fire({
            title: "Supprimé !",
            text: "Le médicament a été supprimé.",
            icon: "success"
          }).then(() => {
            this.getAllMedicaments()
          })
        })
      }
    });
  }

}
