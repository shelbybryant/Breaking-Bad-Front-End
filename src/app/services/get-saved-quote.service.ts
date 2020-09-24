import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Quotes } from '../models/quotes';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetSavedQuoteService {

  constructor(private http: HttpClient) { }

  

  pullSavedQuotes(userId:number) {
    console.log("pull saved quotes - userId:", userId);
    return this.http.get<any>('http://localhost:8080/BreakingBad/quote/' + userId); 
   }
}
