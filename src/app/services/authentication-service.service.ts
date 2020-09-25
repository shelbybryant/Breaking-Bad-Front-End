/*
 * this service checks if user login inputs are valid/correct and sets them in session storage
 * methods: 
 *    authenticate() - Authenticate the username and password
 *    isUserLoggedIn() -checks the session storage if user name exists. If it does then return true
 *    logout()- This method clears the session storage of user name
 */

import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  endpoint: string = 'http://localhost:8080/BreakingBad/auth';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  currentUser = {};


  constructor(private http: HttpClient, public router: Router) { }

  getHttp() {
    return this.http;
  }
  // Error 
  handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      msg = error.error.message;
    } else {
      // server-side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);
  }

}
