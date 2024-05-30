import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DossierService } from 'src/app/core/services/dossier.service';
import { AddDossierComponent } from '../add-dossier/add-dossier.component';
import { MatDialog } from '@angular/material/dialog';
import { EditDossierComponent } from '../edit-dossier/edit-dossier.component';

@Component({
  selector: 'app-list-dossier',
  templateUrl: './list-dossier.component.html',
  styleUrls: ['./list-dossier.component.scss']
})
export class ListDossierComponent implements OnInit {
  dossiers: any;
  genreSelectionne: string = '';
  filtreActif: boolean = false;
  constructor(
    private dossierService : DossierService,
    private router : Router,
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.getAllDossier()
  }

  getAllDossier(){
    this.dossierService.getAllDossiers().subscribe(res=>{
      this.dossiers = res
      console.log(res)
    })
  }

  openDialogAddDoc() {
    const dialogRef = this.dialog.open(AddDossierComponent, {
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getAllDossier()
    });
  }

  capitalizeFirstLetter(str: string): string {
    return str?.charAt(0).toUpperCase() + str.slice(1);
  }

  showDetails(id : any){
    const url = "view-dossier/"+id
    this.router.navigateByUrl(url)
  }
  filtrerParGenre(genre: string) {
    if (this.filtreActif && this.genreSelectionne === genre) {
      this.filtreActif = false;
      this.getAllDossier();
    } else {
      this.filtreActif = true;
      this.genreSelectionne = genre;
      this.dossierService.getAllDossiers().subscribe((dossiers: any[]) => {
        this.dossiers = dossiers.filter(dossier => dossier.genre === genre);
      });
    }
}


search(value: string) {
  if (!value.trim()) {
    
    this.getAllDossier();
    return;
  }

  this.dossiers = this.dossiers.filter(dossier =>
    dossier.nom.toLowerCase().includes(value.toLowerCase()) ||
    dossier.prenom.toLowerCase().includes(value.toLowerCase())
  );
}

}
