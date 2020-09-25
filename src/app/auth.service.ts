import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authUrl="http://localhost:4200/BreakingBad/auth";

  constructor(private http: HttpClient) { }
}
