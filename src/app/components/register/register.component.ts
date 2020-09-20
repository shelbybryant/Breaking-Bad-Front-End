import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/services/http-client.service';
import  {HttpClientService } from 'src/app/services/http-client.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  error: string;
  user: User = new User("","","","");

  constructor(
    private httpClientService: HttpClientService
  ) { }

  ngOnInit() {
  }

  registerUser(): void {
    this.httpClientService.registerUser(this.user)
        .subscribe( data => {
          alert("New User registered successfully.");
        });

  };


}
