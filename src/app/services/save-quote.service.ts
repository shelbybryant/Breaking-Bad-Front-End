import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Quotes } from '../models/quotes';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SaveQuoteService {

  constructor(private http:HttpClient) { }


  saveQuote(q:Quotes): Observable<Quotes> {
    let body: Quotes = q;
    return this.http.post<Quotes>('http://localhost:8080/BreakingBad/quote', body);
  }
}
