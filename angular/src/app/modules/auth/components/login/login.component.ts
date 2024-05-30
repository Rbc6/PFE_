import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

class User {
  userName : any ;
  password : any
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user = new User()
  constructor(
    private authService : AuthService,
    private router : Router
  ) { }

  ngOnInit(): void {
  }
  token:any

  login(){
    this.authService.loginService(this.user).subscribe(res=>{
      this.token = res
      localStorage.setItem('token' , this.token.token)
      console.log(this.token);
      this.router.navigateByUrl('liste-dossier')

    })
  }



}
