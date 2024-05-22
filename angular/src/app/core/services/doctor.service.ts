import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DoctorService {
  constructor(private http: HttpClient) {}

  getAllDoctor() {
    return this.http.get('http://localhost:8081/medecins/getAllV2');
  }
  getMedecinById(id:any) {
    return this.http.get('http://localhost:8081/medecins/getMedecinById/'+id);
  }
  getAllspecialiteMedicale() {
    return this.http.get(
      'http://localhost:8081/medecins/type/specialiteMedicale'
    );
  }
  disponibiliesMedicin() {
    return this.http.get('http://localhost:8081/disponibiliesMedicin/getAll');
  }

  getForMyCHARTone() {
    return this.http.get('http://localhost:8081/disponibiliesMedicin/getAllV2');
  }

  createDoc(data: any) {
    return this.http.post('http://localhost:8081/medecins/createV2', data);
  }


  delete(id: any) {
    return this.http.delete('http://localhost:8081/medecins/delete/'+id);
  }

  editDoc(data: any ,id:any) {
    return this.http.put('http://localhost:8081/medecins/update/'+id, data);
  }

  createDispo(data:any){
    return this.http.post('http://localhost:8081/disponibiliesMedicin/createV2',data)
  }

  getAlldisponibiliteByMedcin(id:any){
    return this.http.get("http://localhost:8081/disponibiliesMedicin/findDispoByMedcin/"+id)
  }
  getSpecialiteForDash(){
    return this.http.get('http://localhost:8081/medecins/dash/countDoctorsBySpecialty');

  }

  createDispoJour(data:any , id:any){
    return this.http.post('http://localhost:8081/disponibiliesMedicin/affectJoursToMedcin/'+id, data)
  }
}
