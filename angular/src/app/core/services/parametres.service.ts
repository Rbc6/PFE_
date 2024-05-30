import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ParametresService {

  constructor(private http: HttpClient) {}
  //Allergies
  getAllAllergies(){
    return this.http.get("http://localhost:8081/Allergies/getAll")
  }
  createAllergie(data:any){
    return this.http.post("http://localhost:8081/Allergies/create",data)
  }
  deleteAllergie(id : any){
    return this.http.delete("http://localhost:8081/Allergies/delete/"+id)
  }
  //Apcis
  getAllApcis(){
    return this.http.get("http://localhost:8081/Apcis/getAll")
  }
  createApcis(data:any){
    return this.http.post("http://localhost:8081/Apcis/create",data)
  }
  deleteApcis(id : any){
    return this.http.delete("http://localhost:8081/Apcis/delete/"+id)
  }
  //Actes Médicaux
  getAllActesMed(){
    return this.http.get("http://localhost:8081/ActesMed/getAll")
  }
  createActesMed(data:any){
    return this.http.post("http://localhost:8081/ActesMed/create",data)
  }
  deleteActesMed(id : any){
    return this.http.delete("http://localhost:8081/ActesMed/delete/"+id)
  }
  //Examen Bio
  getAllbio(){
    return this.http.get("http://localhost:8081/bio/getAll")
  }
  createbio(data:any){
    return this.http.post("http://localhost:8081/bio/create",data)
  }
  deletebio(id : any){
    return this.http.delete("http://localhost:8081/bio/delete/"+id)
  }
  //Radio
  getAllradio(){
    return this.http.get("http://localhost:8081/radio/getAll")
  }
  createradio(data:any){
    return this.http.post("http://localhost:8081/radio/create",data)
  }
  deleteradio(id : any){
    return this.http.delete("http://localhost:8081/radio/delete/"+id)
  }
  //Médicamements
  getAllMedicaments(){
    return this.http.get("http://localhost:8081/Medicaments/getAll")
  }
  createMedicaments(data:any){
    return this.http.post("http://localhost:8081/Medicaments/create",data)
  }
  deleteMedicaments(id : any){
    return this.http.delete("http://localhost:8081/Medicaments/delete/"+id)
  }
  //Paramédical
  getAllParamedical(){
    return this.http.get("http://localhost:8081/Paramedical/getAll")
  }
  createParamedical(data:any){
    return this.http.post("http://localhost:8081/Paramedical/create",data)
  }
  deleteParamedical(id : any){
    return this.http.delete("http://localhost:8081/Paramedical/delete/"+id)
  }

}

