import { Component, OnInit } from '@angular/core';
//import { QuotesService } from '../quotes.service';
import { Quotes } from '../../models/quotes'
import { QuotesService } from '../../services/quotes.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private quoteService: QuotesService) { }
  // quoteService grab object[] from quotes.service.ts getQuotes() quotesList
  //quoteList: Object[];
  // before quotes.service.ts built
  quoteList: Quotes[];

  // hiding for cards
  visibility: boolean = true;
  // button action for toggle
  toggleVis() {
    this.visibility = !this.visibility;
  }

  ngOnInit(): void {
    

    //now quotes come with observable, so need to subscribe
    this.quoteService.getQuotes().subscribe(
      data => {
        this.quoteList = data;
        console.log(this.quoteList);
      }, () => {
        console.log("something went wrong");
      }
    )

  }


  
}
