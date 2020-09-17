import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Quotes } from '../models/quotes';


@Injectable({
  providedIn: 'root'
})
export class QuotesService {

  constructor(private http: HttpClient) { }

  getQuotes(): Observable<Quotes[]> {


    return this.http.get("https://www.breakingbadapi.com/api/quotes") as Observable<Quotes[]>; // breaking bad api   quotes/1
  }



}
