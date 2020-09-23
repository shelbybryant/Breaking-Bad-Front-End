import { Component, OnInit } from '@angular/core';
import { GetSavedQuoteService } from 'src/app/services/get-saved-quote.service';
import { Quotes } from 'src/app/models/quotes';
import { HttpClientService } from 'src/app/services/http-client.service';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-user-quotes',
  templateUrl: './user-quotes.component.html',
  styleUrls: ['./user-quotes.component.css']
})
export class UserQuotesComponent implements OnInit {

  // headers = ["Quote Id", "Your User Id", "Character First Name", "Character Last Name", "Quote"];

  //<button (click)="toggleVis()">Click to Show/Hide</button>

  //class Quotes is the model to follow


  constructor(private http: HttpClient) { }
  visibility:boolean = true;
 
  toggleVis(){
    this.visibility = !this.visibility;
  }

  quotes: string[];
  userId:number;

  pullSavedQuotes(userId:number) {
   
    return this.http.get<Quotes>('http://localhost:8080/BreakingBad/quote' + userId); 
   }

  ngOnInit(): void {

  }


}
