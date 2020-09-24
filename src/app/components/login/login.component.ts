import { Component, OnInit } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { FormBuilder, FormGroup } from "@angular/forms";
import { Router } from '@angular/router';
import { UserComponent } from 'src/app/components/user/user.component';
import { AuthenticationService } from 'src/app/services/authentication-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  error:string;
  loginForm: FormGroup;
  endpoint: string = 'http://localhost:4200/';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  currentUser = {};

  constructor(
    public fb: FormBuilder,
    public authenticationService: AuthenticationService,
    public router: Router
  ) {
    this.loginForm = this.fb.group({
      username: [''],
      password: ['']
    })
  }

  ngOnInit() { }

  loginUser() {
    this.login(this.loginForm.value)
    this.loginForm.reset
  }
  
  login(user: UserComponent) {
      return this.authenticationService.getHttp().post<any>(`${this.endpoint}/login`, user)
        .subscribe((res: any) => {
          localStorage.setItem('User', res.User)
          this.authenticationService.getUserProfile(res._id).subscribe((res) => {
            this.currentUser = res;
            this.router.navigate(['home' + res.msg._id]);
          })
        })
    }
}