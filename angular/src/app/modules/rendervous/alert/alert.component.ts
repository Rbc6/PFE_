import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RendezvousService } from 'src/app/core/services/rendezvous.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {

  constructor(
    private rendezvousService : RendezvousService,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.getAlert()
  }

  getAlert(){
    this.rendezvousService.getAllAlert().subscribe(res=>{
      this.alerts = res
      console.log(res)
    })
  }
  alerts:any


  goTo(id:any){
    const url = "view-dossier/"+id
    this.router.navigateByUrl(url)
  }
}
