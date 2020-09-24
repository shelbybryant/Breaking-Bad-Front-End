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

  //class Quotes is the model to follow


  constructor(public quoteser: GetSavedQuoteService) { }
  // visibility:boolean = true;
 
  // toggleVis(){
  //   this.visibility = !this.visibility;
  // }

  // quote: string;
  //userId:number;
  quotes:Quotes[];


  ngOnInit(): void {
    this.getQuotes();
  }

  getQuotes() {
    this.quoteser.pullSavedQuotes().subscribe(
      (response: Quotes[]) => {
        this.quotes = response;
      }
    )
  }

}
