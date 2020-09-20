import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { Quotes } from '../models/quotes';


@Injectable({
  providedIn: 'root'
})
export class QuotesService {

  constructor(private http: HttpClient) { }

  //getQuotes(): Observable<Quotes[]> {


    //return this.http.get("https://www.breakingbadapi.com/api/quotes") as Observable<Quotes[]>; // breaking bad api   quotes/1
  //}
  // get random quote from BB api
  getRandomQuotes(): Observable<any> { //RandomQuote[]

    let response1 = this.http.get("https://www.breakingbadapi.com/api/quote/random");
    let response2 = this.http.get("https://www.breakingbadapi.com/api/quote/random");
    let response3 = this.http.get("https://www.breakingbadapi.com/api/quote/random");
    console.log("response 1 "+response1);
    return forkJoin([response1, response2, response3]);
    //return this.http.get("https://www.breakingbadapi.com/api/quote/random") as Observable<RandomQuote[]>;

  }

  getRandomCharacter(): Observable<any> {
    //let response4 = this.http.get<any>(("https://www.breakingbadapi.com/api/characters/" + id));
    let response4 = this.http.get("https://www.breakingbadapi.com/api/character/random");
    console.log("response4 " + response4);
    return response4;
  }


}
