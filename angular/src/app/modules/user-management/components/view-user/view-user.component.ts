import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { DialogEditUserComponent } from '../dialog-edit-user/dialog-edit-user.component';
import { MatDialog } from '@angular/material/dialog';
import { ChangePasswordComponent } from 'src/app/modules/auth/components/change-password/change-password.component';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.scss']
})
export class ViewUserComponent implements OnInit {


  constructor(private router : Router,
    private authService :AuthService,
    private dialog: MatDialog,
  ) { }
  user :any
  ngOnInit(): void {
    this.authService.decodeTokenAfterLogin().subscribe(res=>{
      this.user = res
      console.log(this.user);
  
     },err=>{
      this.router.navigateByUrl('auth/login')
     })
  }
  openDialogEditUser(data: any) {
    const dialogRef = this.dialog.open(DialogEditUserComponent, {
      data: data
    });
    dialogRef.afterClosed().subscribe(result => {
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.router.onSameUrlNavigation = 'reload';
      this.router.navigate([this.router.url]);
    });
  }
  openDialogChangePass(data: any) {
    const dialogRef = this.dialog.open(ChangePasswordComponent, {
      data: data
    });
    dialogRef.afterClosed().subscribe(result => {
      
    });
  }
    }

 



