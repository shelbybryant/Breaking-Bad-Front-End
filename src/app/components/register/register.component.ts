import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { Router } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { AuthenticationService } from 'src/app/services/authentication-service.service';
import { User } from 'src/app/models/user';
import { GetSavedQuoteService } from 'src/app/services/get-saved-quote.service';
import { GamesService } from 'src/app/services/games.service'
import { HttpClient } from '@angular/common/http';
import { SaveQuoteService } from 'src/app/services/save-quote.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userName: string;
  userEmail: string;
  userPassword: string;
  screenName: string;
  user: User;
  registerForm: FormGroup;
  fb: FormBuilder;
  error:string;
 
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  endpoint: string = 'http://localhost:8080/BreakingBad';
  constructor(
    private http:HttpClient,
    public authenticationService: AuthenticationService,
    public router: Router,
    public quoteService: GetSavedQuoteService, 
    public gameService: GamesService ) {
  
    this.registerForm = this.fb.group({
       userEmail: [''],
       userPassword: [''],
       userName: ['']
     })
  }
  ngOnInit() {}
  
  registerUser() {
    var formData: any = new FormData();
    var email = this.registerForm.get('email').value;
    var password = this.registerForm.get('password').value;
    var screenName = this.registerForm.get('screenname').value;
    email = this.user.email;
    password=this.user.password;
    screenName=this.user.screenName;
    let u = new User(0, screenName, email, password, null, null);
    this.registerForm.reset()
    this.router.navigate(['login']);
    this.saveUser(u);
  }

  saveUser(u:User): Observable<User> {
    let body: User = u;
    return this.http.post<User>('http://localhost:8080/BreakingBad/register', body)
    /*return this.authenticationService.getHttp().post<any>(`${this.endpoint}/login`, user)
      .subscribe((res: any) => {
       this.registerForm.reset()
       this.router.navigate(['login']);
        })
        alert("New User registered successfully.")

        saveQuote(q:Quotes): Observable<Quotes> {
          let body: Quotes = q;
          return this.http.post<Quotes>('http://localhost:8080/BreakingBad/quote', body);
        }
      */
    }
}