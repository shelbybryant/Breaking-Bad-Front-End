/*
 * this service checks if user login inputs are valid/correct and sets them in session storage
 * methods: 
 *    authenticate() - Authenticate the username and password
 *    isUserLoggedIn() -checks the session storage if user name exists. If it does then return true
 *    logout()- This method clears the session storage of user name
 */

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  authenticate(username, password) {
    if (username === "batman" && password === "password") {
      sessionStorage.setItem('username', username)
      return true;
    } else {
      return false;
    }
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    console.log(!(user === null))
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('username')
  }
}
