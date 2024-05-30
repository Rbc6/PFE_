import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RendezvousService {

  constructor(private http : HttpClient) { }

  getDataCalendar(){
    return this.http.get("http://localhost:8081/rendezvous/getAllV2")
  }
  getAllRendezVousByDossier(id:any){
    return this.http.get("http://localhost:8081/rendezvous/getAllRendezVousByDossier/"+id)
  }

  rendezvousCreate(data:any){
    return this.http.post("http://localhost:8081/rendezvous",data)
  }


  rendezvousDelete(id:any){
    return this.http.delete("http://localhost:8081/rendezvous/delete/"+id)
  }

  rendezvousUpdate(id :any,data:any){
      return this.http.put('http://localhost:8081/rendezvous/update/'+id, data);
  }
  rendezvousById(id:any){
    return this.http.get("http://localhost:8081/rendezvous/"+id)
  }


  getAllAlert(){
    return this.http.get("http://localhost:8081/api/alert")
  }
  deleteAlert(id : any){
    return this.http.delete("http://localhost:8081/api/alert/delete/"+id)
  }

}
