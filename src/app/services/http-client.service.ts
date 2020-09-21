import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class User{
  constructor(
    public userId:string,
    public email:string,
    public password:string,
    public screenName:string,
    public runningTotal:string,
    public gamesTotal:string,
  ) {}
}

@Injectable({
  providedIn: 'root'
})

export class HttpClientService {

  constructor(
    private httpClient:HttpClient
  ) {}

  getUsers(){
      console.log("test call");
      return this.httpClient.get<User[]>('http://localhost:4200/user');
  }
  
  public registerUser(user) {
    let email='batman@email.com'
    let password='password'
    return this.httpClient.post<User>("http://localhost:4200/user", user);
  }
}

