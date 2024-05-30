import { Component, OnInit } from '@angular/core';
import { ParametresService } from 'src/app/core/services/parametres.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-allergy',
  templateUrl: './list-allergy.component.html',
  styleUrls: ['./list-allergy.component.scss']
})
export class ListAllergyComponent implements OnInit {
allergies : any
  constructor(
    private parametresService : ParametresService
  ) { }

  ngOnInit(): void {
    this.getAllAllergies()
  }
  
  getAllAllergies(){
    this.parametresService.getAllAllergies().subscribe(res=>{
      this.allergies = res
      console.log(this.allergies)
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
        this.parametresService.deleteAllergie(item).subscribe(res => {
          Swal.fire({
            title: "Supprimé !",
            text: "L'allergie' a été supprimé.",
            icon: "success"
          }).then(() => {
            this.getAllAllergies()
          })
        })
      }
    });
  }
}
