
/*
* This component takes user login input and passes it to authenticationService
* mehtod: checkLogin()- This method checks if the user credentials are correct 
* by calling the previously created AuthenticationService
*/

import { Component, OnInit } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { FormGroup, FormBuilder } from "@angular/forms";
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication-service.service';

import { GetSavedQuoteService } from 'src/app/services/get-saved-quote.service';
import { GamesService } from 'src/app/services/games.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  error: string;
  authUrl: string = 'http://localhost:8080/BreakingBad';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  user: User;
  currentUser = {};
  isLoggedIn=false;


  constructor(public fb: FormBuilder, public authenticationService: AuthenticationService, public router: Router, public quoteService: GetSavedQuoteService, public gameService: GamesService ) {

    this.loginForm = this.fb.group({
      email: [''],
      password: ['']
    })
  }

  onSubmit() {
    var formData: any = new FormData();
    var email = this.loginForm.get('email').value;
    console.log('email = ' + email);
    //var email = formData.append("email", this.loginForm.get('email').value);
    var formPassword = this.loginForm.get('password').value;
    console.log(formData);
    this.authenticationService.getHttp().get('http://localhost:8090/BreakingBad/login/' + email, { headers:email }).subscribe(
      (response: User ) => 
      { this.user = response;
        console.log(this.user)
        if (this.user == null){
          localStorage.setItem('isLoggedIn', 'false');
        } else {
          localStorage.setItem('user', JSON.stringify(this.user));
          if (this.user.password ==formPassword) {
            localStorage.setItem('isLoggedIn', 'true');
            //Set current user for this class
            this.currentUser = this.user;
            // this.router.navigate(['profile/' + res.msg._id]);
            this.router.navigate(['home']);
          } else {
            this.router.navigate(['home']);
            alert("Oops. Something went wrong. Please login again.")
          }
        }
      }, (error) => console.log(error)
    )}
  ngOnInit() {};
}
