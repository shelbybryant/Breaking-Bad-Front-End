import { Component } from '@angular/core';
import { AuthenticationService } from "src/app/services/authentication-service.service";


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
