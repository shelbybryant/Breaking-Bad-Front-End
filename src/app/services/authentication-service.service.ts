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
  
  loginUser(email): Observable<any>{
    return this.http.post<any>(`${this.endpoint}/login`, email);
  }

  /*
  login(user: User) {
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
  
  /*
  * This method returns true if the user is logged in else returns false.
  */
  get isLoggedIn(): boolean {
    return localStorage.getItem('isLoggedIn') === 'true';
    // let authToken = localStorage.getItem('access_token');
    // return (authToken !== null) ? true : false;
  }

  // User profile
  getUser(id): Observable<any> {
    let bb = `${this.endpoint}/profile/${id}`;
    //let bb = `${this.endpoint}/home`;

    return this.http.get(bb, { headers: this.headers }).pipe(
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
