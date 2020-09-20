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
  ) { 

    getUser()
  {
    
  }

  
  }

