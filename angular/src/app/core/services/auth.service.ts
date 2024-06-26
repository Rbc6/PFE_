import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http : HttpClient
  ) { }

  loginService(data:any){
    return this.http.post("http://localhost:8081/users/login" ,data)
  }

  registerService(data : any){
    return this.http.post("http://localhost:8081/users/addUser" , data)
  }


  public decodeTokenAfterLogin():  Observable<any> {
    var parts = []
    var decodedPayload = "" ;
    const token = localStorage.getItem('token')
    if(token){

      parts = token.split('.');
    }
    if(parts.length > 0){

      decodedPayload = JSON.parse(atob(parts[1]));
    }
    return this.http.get('http://localhost:8081/users/byUsename/'+decodedPayload.sub)
  }
}
