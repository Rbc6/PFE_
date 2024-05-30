import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DossierService {

  constructor(private http : HttpClient) { }

  getAllDossiers(){
    return this.http.get("http://localhost:8081/dossiers")
  }

  getDossierById(id : any){
    return this.http.get("http://localhost:8081/dossiers/etDossierById/"+id)
  }


  saveDossier(data:any){
    return this.http.post("http://localhost:8081/dossiers" , data)
  }
  editDossier(data:any , id:any){
    return this.http.put("http://localhost:8081/dossiers/"+id , data)
  }
  deleteDossier(id :any){
    return this.http.delete("http://localhost:8081/dossiers/delete/"+id)
  }

  getImageById(id : any){
    return this.http.get("http://localhost:8081/get/image/info/byDossier/"+id)
  }

  saveImage(data : any , id : any){
    return this.http.post("http://localhost:8081/upload/image/"+id , data)
  }
}
