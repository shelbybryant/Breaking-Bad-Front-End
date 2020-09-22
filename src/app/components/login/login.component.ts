/*
* This component takes user login input and passes it to authenticationService
* mehtod: checkLogin()- This method checks if the user credentials are correct 
* by calling the previously created AuthenticationService
*/

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

  loginForm: FormGroup;
  endpoint: string = 'http://localhost:4200/';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(
    public fb: FormBuilder,
    public authenticationService: AuthenticationService,
    public router: Router
  ) {
    this.loginForm = this.fb.group({
      email: [''],
      password: ['']
    })
  }

  ngOnInit() { }

  loginUser() {
    this.login(this.loginForm.value)
    this.loginForm.reset
  }
  /*
  * This method 
  * 1. allows the user to access in the app using JSON web token generated by node server.
  * 2. gets JWT token from the API response and stores in the local storage
  */
  login(user: UserComponent) {
      return this.authenticationService.getHttp().post<any>(`${this.endpoint}/login`, user)
        .subscribe((res: any) => {
          localStorage.setItem('access_token', res.token)
          this.authenticationService.getUserProfile(res._id).subscribe((res) => {
            this.authenticationService.currentUser = res;
            this.router.navigate(['profile/' + res.msg._id]);
          })
        })
    }
}