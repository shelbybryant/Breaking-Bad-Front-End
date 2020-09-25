//This component clear session storage email by calling authenticationService

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication-service.service'

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService,
    private router: Router) {}

  /*
    onLogout() {
    //localStorage.removeItem('user');
    //localStorage.clear();
    //localStorage.setItem('isLoggedIn', 'false');
    this.router.navigate(['login']);
  }
  */
  
  ngOnInit(): void {};
}
