import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Quotes } from '../models/quotes';

@Injectable({
  providedIn: 'root'
})
export class GetSavedQuoteService {

  constructor(private http: HttpClient) { }


  pullSavedQuotes(userId:number) {
   
    return this.http.get<Quotes>('http://localhost:8080/BreakingBad/quote' + userId); 
   }
}
