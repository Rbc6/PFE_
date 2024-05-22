import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DispensaireService {

  constructor(
    private http : HttpClient
  ) { }

  getAll(){
    return this.http.get("http://localhost:8081/dispensaire")
  }

  create(data:any){
    return this.http.post("http://localhost:8081/dispensaire" , data)
  }
}
