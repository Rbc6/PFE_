import { Component, HostListener, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  screenWidth!: number;

 public isExpanded: boolean = false;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private router : Router,
    private authService : AuthService
   ) {
    this.getScreenSize();
  }
  user : any
  ngOnInit(): void {
   this.authService.decodeTokenAfterLogin().subscribe(res=>{
    this.user = res
    console.log(this.user);

   },err=>{
    this.router.navigateByUrl('auth/login')
   })
  }
  @HostListener('window:resize', ['$event'])
  getScreenSize() {
          this.screenWidth = window.innerWidth;
          // console.log(this.screenWidth);
          if(this.screenWidth <= 959){
            this.isExpanded = true;
          }else{
            this.isExpanded = false;
          }
  }

  logout(){
    localStorage.clear()
    this.router.navigateByUrl('auth/login')
  }

}
