
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication-service.service';
import { GetSavedQuoteService } from 'src/app/services/get-saved-quote.service';
import { Quotes } from 'src/app/models/quotes';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {

  constructor(public authenticationService: AuthenticationService, private actRoute: ActivatedRoute, private quoteser: GetSavedQuoteService) {
    // let id = this.actRoute.snapshot.paramMap.get('id');
    // this.authenticationService.getUserProfile(id).subscribe(res => {
    //   this.authenticationService.currentUser = res.msg;
    // })
    console.log("in profile component - user:", this.authenticationService.currentUser);
  }

  userId: number;
  quotes: Quotes[];

  ngOnInit() { 
    console.log("in profile component - gnOnInit() - user:", this.authenticationService.currentUser);
    this.getQuotes();
  }

  getQuotes() {
    //Get user id
    
    console.log(window.location.pathname);
    // const pathArray = window.location.pathname.split('/');
    // console.log("path array:", pathArray);
    // const userId = parseInt(pathArray[pathArray.length - 1], 10);
    this.quoteser.pullSavedQuotes(1).subscribe(
      (response: Quotes[]) => {
        this.quotes = response;
      }
    )
  }


}
