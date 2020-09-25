import { Component, OnInit } from '@angular/core';
import { GetSavedQuoteService } from 'src/app/services/get-saved-quote.service';
import { Quotes } from 'src/app/models/quotes';
import { HttpClientService } from 'src/app/services/http-client.service';
import { HttpClient } from '@angular/common/http';
import { SaveQuoteService } from 'src/app/services/save-quote.service';



@Component({
  selector: 'app-user-quotes',
  templateUrl: './user-quotes.component.html',
  styleUrls: ['./user-quotes.component.css']
})
export class UserQuotesComponent implements OnInit {

  //class Quotes is the model to follow


  constructor(public quoteService: GetSavedQuoteService, public newQuoteService: SaveQuoteService) { }
  // visibility:boolean = true;
 
  // toggleVis(){
  //   this.visibility = !this.visibility;
  // }

  // quote: string;
  //userId:number;
  quotes:Quotes[];

  q:Quotes;
  quoteId: number;
  userId: number;
  quote: string;    
  authorFName: string;
  authorLName: string;

  ngOnInit(): void {
    this.getQuotes();
  }

  getQuotes() {
    this.quoteService.pullSavedQuotes().subscribe(
      (response: Quotes[]) => {
        this.quotes = response;
      }
    )
  }

  newQuotes() {
   let q = new Quotes(0, 0, this.quote, this.authorFName, this.authorLName)
   this.newQuoteService.saveQuote(q).subscribe(
     (response: Quotes) => {
       this.q = response;
     }
   )
  }



}
