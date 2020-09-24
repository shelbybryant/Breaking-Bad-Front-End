
/*
* This component takes user login input and passes it to authenticationService
* mehtod: checkLogin()- This method checks if the user credentials are correct 
* by calling the previously created AuthenticationService
*/

import { Component, OnInit } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { FormBuilder, FormGroup, NgForm } from "@angular/forms";
import { Router } from '@angular/router';
import { UserComponent } from 'src/app/components/user/user.component';
import { AuthenticationService } from 'src/app/services/authentication-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  error: string;
  loginForm: FormGroup;
  endpoint: string = 'http://localhost:8080/BreakingBad';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  currentUser = {};

  constructor(public fb: FormBuilder, public authenticationService: AuthenticationService, public router: Router) {
    this.loginForm = this.fb.group({
      email: [''],
      password: ['']
    })
  }

  ngOnInit() { }

  onSubmit(f: NgForm) {
    console.log(f.value);  // { first: '', last: '' }
    console.log(f.valid);  // false
  }

  loginUser() {
    this.login(this.loginForm.value)
    this.loginForm.reset
  }
  
  login(user: UserComponent) {
    console.log("user:", user);
    return this.authenticationService.getHttp().post<any>(`${this.endpoint}/login`, user)
      .subscribe((res: any) => {
        console.log("\n\nServer response:", res);

        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('userId', res.userId);
        //Set current user for this class
        this.currentUser = res;
        
        //Set auth service's current user
        this.authenticationService.currentUser = res;

        
        // this.router.navigate(['profile/' + res.msg._id]);
        this.router.navigate([`profile/${res.userId}`]);

        // this.authenticationService.getUserProfile(res._id).subscribe((res) => {
        //   this.currentUser = res;
        //   this.router.navigate(['profile/' + res.msg._id]);
        // })
      })
  }
}
