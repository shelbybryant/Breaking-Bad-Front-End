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
  user: User = new User("","","","","","");
  users: User[];

  constructor(
    private httpClientService: HttpClientService
  ) { }

  ngOnInit() {
    this.httpClientService.getUsers().subscribe(
      response =>{this.users = response;}
     );
  }    

  // Sign-in
  registerUser(user: User) {
    return this.http.post<any>(`${this.endpoint}/login`, user)
      .subscribe((res: any) => {
        localStorage.setItem('access_token', res.token)
        this.getUserProfile(res._id).subscribe((res) => {
          this.currentUser = res;
          this.router.navigate(['user-profile/' + res.msg._id]);
        })
        alert("New User registered successfully.")
      })
  }


}
