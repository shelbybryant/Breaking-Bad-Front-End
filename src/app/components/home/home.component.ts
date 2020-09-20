import { Component, OnInit } from '@angular/core';
import { Quotes } from '../../models/quotes'
import { QuotesService } from '../../services/quotes.service';
import { Router } from '@angular/router';
import { Item } from '../../models/item';
import { ITEMS } from '../../models/listOfCharacter';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  //responses
  public randomQ1: any;
  public randomQ2: any;
  public randomQ3: any;
  public selectedChar: any;

  // hiding for cards
  visibility: boolean = true;
  // radio buttons
  itemsList: Item[] = ITEMS; //html loop through itemsList
  isSelectedCharacter = false;
  //
  charID: number;

  constructor(   
    private quoteService: QuotesService,
    private router: Router
  ) {
    this.itemsList = ITEMS;
  }

  // button action for toggle
  toggleVis() {
    this.visibility = !this.visibility;
  }

  ngOnInit(): void {
    this.displayRandomQuotes();
  }

  // dispaly 3 random quotes
  displayRandomQuotes(): void {
    //now random quotes come with observable, so need to subscribe
    this.quoteService.getRandomQuotes().subscribe(
      data => {

        this.randomQ1 = data[0];
        this.randomQ2 = data[1];
        this.randomQ3 = data[2];

        console.log(data[0]);
        console.log(data[1]);
        console.log(data[2]);

      }, () => {
        console.log("something went wrong");
      });

  }

  // when "random char" button clicked make "by-char-domai" div visible
  byRandomCharBtn(event) {
    console.log("by character btn clicked" + event);
    document.getElementById("by-char-domain").style.display = 'block';
  }
  // when "Select a Character" button clicked, it will display random char card 
  selectRandomCharacter() {
    console.log("in select random char func");
    this.quoteService.getRandomCharacter().subscribe(
      data => {
        //console.log("selected char " + data);
        this.selectedChar = data;
        console.log(data);
      }, () => {
        console.log("something went wrong");
      });
  }

  /*########### Template Driven Form ###########*/
  submitForm(form: NgForm) {
    this.isSelectedCharacter = true;

    if (!form.valid) {    
      return false;
    } else {

      alert(JSON.stringify(form.value) + " --- ---");
      console.log(JSON.stringify(form.value.characterid) + " grabbed char id ")
      console.log(JSON.stringify(form.name) + " grabbed char name ")
      console.log(JSON.stringify(form.value.quoteauthor) + " grabbed author ")


      this.charID = form.value.characterid;
      console.log("character id I grabbed : " + this.charID);


    }
  }


}


/*

 *
 * radioSel: any;
  radioSelected: number;
  radioSelectedString: string;
   //this.radioSelected = 1;
(change) = "onItemChange(item)"
<p>{{radioSelectedString}}</p>
getSelecteditem() {
  console.log("item" + Item);
  this.radioSel = ITEMS.find(Item => Item.characterid === this.radioSelected);
  this.radioSelectedString = JSON.stringify(this.radioSel);
  console.log("radio sel " + this.radioSel);

}

onItemChange(item) {
  this.getSelecteditem();

}
*/
