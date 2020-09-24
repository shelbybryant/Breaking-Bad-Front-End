
/*
* This component takes user login input and passes it to authenticationService
* mehtod: checkLogin()- This method checks if the user credentials are correct 
* by calling the previously created AuthenticationService
*/

import { Component, OnInit } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { FormGroup, FormBuilder } from "@angular/forms";
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  error: string;
  endpoint: string = 'http://localhost:8080/BreakingBad';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  currentUser = {};

  constructor(public fb: FormBuilder, public authService: AuthenticationService, public router: Router) {
    this.loginForm = this.fb.group({
      email: [''],
      password: ['']
    })
  }

  OnSubmit() {
    var formData: any = new FormData();
    formData.append("email", this.loginForm.get('email').value);
    formData.append("password", this.loginForm.get('password').value);
    console.log(formData);
    this.authService.getHttp().post('http://localhost:4200/BreakingBad/', formData).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    )
  }
  ngOnInit() { }
  
  /*
    if (user == "null"){
      catchError(this.handleError);
    } else {
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('user', res.user);
      //Set current user for this class
      this.currentUser = res;
      // this.router.navigate(['profile/' + res.msg._id]);
      this.router.navigate(['home']);
    }
}
  
const hdrs = new HttpHeaders({
  'Content-Type': 'application/x-www-form-urlencoded'
});

const data = new FormData();
data.append("username", username);
data.append("password", password);
// ...
return this.http.post<any>(this.authUrl, data, {headers: headers});
 
*/ 
}
