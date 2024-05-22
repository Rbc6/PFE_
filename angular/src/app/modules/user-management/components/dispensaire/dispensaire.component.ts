import { Component, OnInit } from '@angular/core';
import { DispensaireService } from 'src/app/core/services/dispensaire.service';
import Swal from 'sweetalert2';
class Dispensaire {
  name: any;
  adresse: any;
}
@Component({
  selector: 'app-dispensaire',
  templateUrl: './dispensaire.component.html',
  styleUrls: ['./dispensaire.component.scss'],
})
export class DispensaireComponent implements OnInit {
  dispensaire = new Dispensaire();

  equipements: any;

  room: any;
  showForm = false;
  constructor(private dispensaireService: DispensaireService) {}

  ngOnInit(): void {
    this.getAll()
  }

  actionShowForm() {
    this.dispensaire = new Dispensaire();
    this.showForm = !this.showForm;
  }
  dispensaireList: any;
  getAll() {
    this.dispensaireService.getAll().subscribe((res) => {
      this.dispensaireList = res;
    });
  }

  editItem(data: any) {
    this.dispensaire = data;
    this.showForm = true;
  }

  save() {
    this.dispensaireService.create(this.dispensaire).subscribe((res) => {
      Swal.fire({
        title: 'Succès !',
        text: "Dispensaire a été ajouté avec succès.",
        icon: 'success',
        timer: 3000,
        timerProgressBar: true,
        showConfirmButton: false,
      }).then(() => {
        this.getAll();
        this.showForm = false;
        this.dispensaire = new Dispensaire();
      });
    });
  }

  detelet(id: any) {
    // this.equipementService.deleteEquipement(id).subscribe(res=>{
    //   this.getAllEquipement()
    // })
  }
}
