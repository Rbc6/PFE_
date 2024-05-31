import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import Swal from 'sweetalert2';

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

  login() {
    this.authService.loginService(this.user).subscribe(
      (res: any) => {
        if (res && res.token) {
          this.token = res;
          localStorage.setItem('token', this.token.token);
          console.log(this.token);
          this.router.navigateByUrl('view-user');
        } else {
          this.showError();
        }
      },
      (error: any) => {
        console.error('Erreur de connexion', error);
        this.showError();
      }
    );
  }

  private showError() {
    Swal.fire({
      title: 'Erreur !',
      text: 'Identifiant ou mot de passe incorrect.',
      icon: 'error',
      timer: 4000,
      timerProgressBar: true,
      showConfirmButton: false
    });
  }


}
