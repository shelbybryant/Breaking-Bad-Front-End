/*
* This component takes user login input and passes it to authenticationService
* mehtod: checkLogin()- This method checks if the user credentials are correct 
* by calling the previously created AuthenticationService
*/

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  error: string;
  email = 'batman@email.com'
  password = ''
  invalidLogin = false

  constructor(private router: Router,
    private loginservice: AuthenticationService) { }

  ngOnInit() {}

  checkLogin() {
    if (this.loginservice.authenticate(this.email, this.password)
    ) {
      this.router.navigate([''])
      this.invalidLogin = false
    } else
      this.invalidLogin = true
  }

}