/*
* This component takes user login input and passes it to authenticationService
* mehtod: checkLogin()- This method checks if the user credentials are correct 
* by calling the previously created AuthenticationService
*/

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  error: string;
  loginForm: FormGroup;

  constructor(
      public fb: FormBuilder, 
      public authenticationService: AuthenticationService, 
      private router: Router) {

      this.loginForm = this.fb.group({
        email: [''],
        password: ['']
      });
  }

  login() {
      const val = this.form.value;

      if (val.email && val.password) {
        this.authService.login(val.email, val.password)
            .subscribe(
              () => {
                  console.log("User is logged in");
                  this.router.navigateByUrl('/');
                    }
            );
      }
  }
}