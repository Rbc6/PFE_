import { Component, OnInit } from '@angular/core';
import { ParametresService } from 'src/app/core/services/parametres.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-bio',
  templateUrl: './list-bio.component.html',
  styleUrls: ['./list-bio.component.scss']
})
export class ListBioComponent implements OnInit {
  bio : any
  constructor(
    private parametresService : ParametresService
  ) { }

  ngOnInit(): void {
    this.getAllbio()
  }
  
  getAllbio(){
    this.parametresService.getAllbio().subscribe(res=>{
      this.bio = res
      console.log(this.bio)
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
        this.parametresService.deletebio(item).subscribe(res => {
          Swal.fire({
            title: "Supprimé !",
            text: "Le utilisateur a été supprimé.",
            icon: "success"
          }).then(() => {
            this.getAllbio()
          })
        })
      }
    });
  }
}
