import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  addUser(u:User): Observable<User[]>{
    let body: User = u;
    return this.http.post<User[]>('http://localhost:8080/BreakingBad/register', body);
  }
}
