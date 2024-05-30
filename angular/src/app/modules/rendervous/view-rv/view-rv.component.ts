import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { RendezvousService } from 'src/app/core/services/rendezvous.service';
import { EditRdvDialogComponent } from '../edit-rdv-dialog/edit-rdv-dialog.component';


@Component({
  selector: 'app-view-rv',
  templateUrl: './view-rv.component.html',
  styleUrls: ['./view-rv.component.scss']
})
export class ViewRvComponent implements OnInit {


  constructor(
    private formBuilder: FormBuilder,
    private router : Router,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<ViewRvComponent>,
    public dialog : MatDialog,
    private rendezvousService :RendezvousService
  ) { }

  ngOnInit(): void {
    console.log("View"+this.data);
    
  }

  delete(id:any){
    this.rendezvousService.rendezvousDelete(id).subscribe(res=>{
      
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      
      this.router.navigate([this.router.url]);
    
    })
  }
  
  openDialogEditRdv(data: any) {
    const dialogRef = this.dialog.open(EditRdvDialogComponent, {
      data: data
    });
    dialogRef.afterClosed().subscribe(result => {
      this.dialogRef.close()
    });
  }

}
