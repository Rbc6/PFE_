import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { RendezvousService } from 'src/app/core/services/rendezvous.service';

@Component({
  selector: 'app-view-rv',
  templateUrl: './view-rv.component.html',
  styleUrls: ['./view-rv.component.scss']
})
export class ViewRvComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<ViewRvComponent>,
    private rendezvousService :RendezvousService
  ) { }

  ngOnInit(): void {
    console.log(this.data);
    
  }

  delete(id:any){
    this.rendezvousService.rendezvousDalete(id).subscribe(res=>{
      this.dialogRef.close()
    })
  }

}
