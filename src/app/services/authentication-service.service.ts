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

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private loggedInStatus = false;
  endpoint: string = 'http://localhost:4200/';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  currentUser = {};


  constructor(
    private http: HttpClient,
    public router: Router) {}

    getHttp(){
      return this.http;
    }

    setLoggedIn(value:boolean){
      this.loggedInStatus = value
    }
    /*
    * This method returns true if the user is logged in else returns false.
    */
    isLoggedIn(): boolean {
      return this.loggedInStatus;
    }

    /*
    * This method removes the token from local storage and logs the user out
    */
    logout() {
      sessionStorage.removeItem('User')
      this.router.navigate(['login']);
    }

  // User profile
  getUserProfile(id): Observable<any> {
    let u = `${this.endpoint}/profile/${id}`;
    //let bb = `${this.endpoint}/home`;

    return this.http.get(u, { headers: this.headers }).pipe(
      map((res: Response) => {
        return res || {}
      }),
      catchError(this.handleError)
    )
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
