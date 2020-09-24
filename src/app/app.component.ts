import { Component } from '@angular/core';
<<<<<<< HEAD
import { AuthenticationService } from "src/app/services/authentication-service.service";

=======
import { NgForm } from '@angular/forms';
>>>>>>> master

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public authenticationService: AuthenticationService) { }

  logout() {
    this.authenticationService.logout()
  }
}
