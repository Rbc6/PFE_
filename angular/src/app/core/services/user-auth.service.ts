import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  constructor() { }

  public setId(id : number){
    localStorage.setItem('id',id.toString())
  }
  public getId(): number {
    const id =localStorage.getItem('id');
    return id !== null ? parseInt(id, 10): 0;
    }
    public setUsername(username:string ){
      localStorage.setItem('username',username);
    }

    public getUsername(): string {
      return  localStorage.getItem('username') as string;
    }

    public setRole(role:string ){
      localStorage.setItem('role',role);
    }

    public getRole(): string {
      return  localStorage.getItem('role') as string;
    }
    public setToken(jwtToken:string ){
      localStorage.setItem('jwtToken',jwtToken);
    }

    public getToken(): string {
      return  localStorage.getItem('jwtToken') as string;
    }

    public clear(){
      localStorage.clear();
    }

    public isLoggedIn(){
      return this.getRole() && this.getToken();
    }


}
