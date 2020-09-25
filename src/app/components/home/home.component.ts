import { Component, OnInit } from '@angular/core';
import { Router, Data } from '@angular/router';
import { NgForm } from '@angular/forms';
import { map, switchMap } from 'rxjs/operators';
import { Item } from '../../models/item';
import { ITEMS } from '../../models/listOfCharacter';
import { User } from '../../models/user';
import { Games } from '../../models/games';
import { GamesService } from '../../services/games.service';
import { Quote } from '@angular/compiler';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  game: Games;

  // For Game Model
  public newGameId: number;
  public newScore: number = 0;
  public newGameSubmitted: Data;
  public sumOfScore: number = 0;

  // collecting answer
  public question_1_answer: any;
  public question_2_answer: any;
  public question_3_answer: any;

  isValidFormSubmitted = false;

  user: User;
  users: User[];

  // responses for listing random 3 quotes
  public randomQ1: any;
  public randomQ2: any;
  public randomQ3: any;

  // responses for getRandomCharacter()
  public selectedChar: any;

  // character id that selected from one of the radio buttons
  public charID: number;
  public characterName: string;
  public authorName: string;
  public randomIndex: number;
  public randomRightQuote: any;

  // response from getCharacterById()
  public selectedCharacter: any;

  // response from getRendomQuoteByAuthor()
  public selectedCharacterQuote: any;

  // hiding for cards
  visibility: boolean = true;

  // html radio buttons loop through listOfCharacter
  itemsList: Item[] = ITEMS;
  isSelectedCharacter = false;

  // store 3 quotes and id seperately
  public quote_list: string[] = [];
  public quote_id_list: number[] = [];
  public quote_author_list: any[] = [];

  // top 3
  public top3User: any[] = [];

  // placeholder for another author, quote,
  public tempAuthor1: string;
  public tempAuthor2: string; 
  public randomIndex1: number;
  public randomIndex2: number;
  public arrIndex1: number;
  public arrIndex2: number;
  public randomOtherQuote1: any;
  public randomOtherQuote2: any;
  public shuffledArr: any;

  constructor(   
    private gameService: GamesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.displayRandomQuotes();
    this.getAllUser();
  }

  // button action for toggle
  // used for button "Select Random" and "Random 3 Quotes"
  toggleVis() {
    this.visibility = !this.visibility;
  }

  // dispaly 3 random quotes
  displayRandomQuotes(): void {
    //now random quotes come with observable, so need to subscribe
    this.gameService.getRandomQuotes().subscribe(
      data => {

        this.randomQ1 = data[0];
        this.randomQ2 = data[1];
        this.randomQ3 = data[2];

      }, () => {
        console.log("something went wrong");
      });
  }

  // when "random char" button click make "by-char-domain" div visible
  byRandomCharBtn(event) {
    //console.log("by character btn clicked" + event);
    document.getElementById("by-char-domain").style.display = 'block';
  }

  // when "Select Random" button click, it will display random char blue card 
  selectRandomCharacter() {
    console.log("in select random char func");
    this.gameService.getRandomCharacter().subscribe(
      data => {
        //console.log("selected char " + data);
        this.selectedChar = data;
        console.log(data);
      }, () => {
        console.log("could not select random character");
      });
  }

  /************** Select Character Radio button Form ****************/
  submitRadioButtonForm(form: NgForm) {
    this.isSelectedCharacter = false;

    if (form.invalid) {
      return;
    } 
     this.isSelectedCharacter = true;
      alert(JSON.stringify(form.value) + " --- ---");
      
    this.charID = form.value.characterid;

    this.randomIndex1 = Math.floor(Math.random() * this.itemsList.length);
    this.randomIndex2 = Math.floor(Math.random() * this.itemsList.length);
    for (var i = 0; i < this.itemsList.length; i++) {

      // if user select one of the character and its id from radio list,
      // then get the author name and character name from itemsList
      if (this.itemsList[i].characterid == this.charID) {
        this.characterName = this.itemsList[i].charactername;
        this.authorName = this.itemsList[i].quoteauthor;
        //console.log("charachter name " + this.itemsList[i].charactername);
        //console.log("quote author " + this.itemsList[i].quoteauthor);
      }

      // get random author 1
      this.arrIndex1 = (i + this.randomIndex1) % this.itemsList.length;
      if (this.itemsList[this.arrIndex1].quoteauthor != this.authorName) {
        this.tempAuthor1 = this.itemsList[this.arrIndex1].quoteauthor;
      }
      // get random author 2
      this.arrIndex2 = (i + this.randomIndex2) % this.itemsList.length;
      if (this.itemsList[this.arrIndex2].quoteauthor != this.authorName) {
        this.tempAuthor2 = this.itemsList[this.arrIndex2].quoteauthor;
      }

    }  
    console.log("character id I grabbed : " + this.charID);
    console.log("selected author I grabbed" + this.authorName);
    console.log("other author 1 " + this.tempAuthor1);
    console.log("other author 2 " + this.tempAuthor2);
    
     // calling the game.service.ts for get the specific character info from bb api
    this.getSelectedCharacterById(this.charID);

    ////////////////////      right quote and right author
    // used author name for getting a random quote instead character name
    // let nameToSplit = this.selectedCharacter[0].name.split(" ");
    let nameToSplit = this.authorName.split(" ");
    let first = nameToSplit[0];
    //console.log("first name " + first);
    let last = nameToSplit[1];
    //console.log("last name " + last);
    // on BB api for get quote query param has to has "+" between names
    let modifiedName = first + "+" + last;
    //console.log("after modified " + modifiedName);
    // get the right quote
    console.log("right quote ");
    this.getRandomQuoteBySelectedCharacter(modifiedName);
    //console.log(this.selectedCharacterQuote[0].author);
    

    ////////////////////////
    let nameToSplit1 = this.tempAuthor1.split(" ");
    let first1 = nameToSplit1[0];
    //console.log("first name 1 " + first1);
    let last1 = nameToSplit1[1];
    //console.log("last name 1 " + last1);
    let modifiedName1 = first1 + "+" + last1;
    //console.log("after modified 1 " + modifiedName1);
    // get the other quote but qrong answer
    console.log("other quote 1 ");
    this.getRandomQuoteBySelectedCharacter(modifiedName1);
    //console.log(this.selectedCharacterQuote[0].author);


    ////////////////////////
    let nameToSplit2 = this.tempAuthor2.split(" ");
    let first2 = nameToSplit2[0];
    //console.log("first name 2 " + first2);
    let last2 = nameToSplit2[1];
    //console.log("last name 2 " + last2);
    let modifiedName2 = first2 + "+" + last2;
    //console.log("after modified 2 " + modifiedName2);
    // get the other quote but qrong answer
    console.log("other quote 2 ");
    this.getRandomQuoteBySelectedCharacter(modifiedName2);
    //console.log(this.selectedCharacterQuote[0].author);
    
  }

  // get infor for selected character id, name nickname, and image
  getSelectedCharacterById(id: number) {
    this.gameService.getCharacterById(id).subscribe(
      data => {

        this.selectedCharacter = data;
        console.log("this is selected character  data");
        console.log(data);
      }, () => {
        console.log("could not get character by id.");
      });
  }
 
  // this is the author/ character selected and the quote is the right answer for question#3
  getRandomQuoteBySelectedCharacter(author: string) {
    this.gameService.getRendomQuoteBySelectedAuthor(author).subscribe(
      data => {
        this.selectedCharacterQuote = data;
        //console.log("this is selected character/author random quote data");
        //console.log(data);

        console.log(this.selectedCharacterQuote[0].author);
        this.quote_list.push(this.selectedCharacterQuote[0].quote);
        //console.log(this.quote_list);
        this.quote_id_list.push(this.selectedCharacterQuote[0].quote_id);
        //console.log(this.quote_id_list);
        this.quote_author_list.push(this.selectedCharacterQuote[0].author);

        document.getElementById('quoteA').innerText = this.quote_list[0];
        document.getElementById('quoteB').innerText = this.quote_list[1];
        document.getElementById('quoteC').innerText = this.quote_list[2];


        // shuffle the array of quotes ??? shuffle array is not working
        //this.shuffledArr = this.shuffle(this.quote_list);
        //console.log(this.shuffledArr);
        //document.getElementById('quoteA').innerText = this.shuffledArr[0];
        //document.getElementById('quoteB').innerText = this.shuffledArr[1];
        //document.getElementById('quoteC').innerText = this.shuffledArr[2];
        //////////////////////////

        //console.log(this.selectedCharacterQuote[0]);
        //this.quote_list.push(this.selectedCharacterQuote[0]);
        //console.log("before shuffle ");
        //console.log(this.quote_list);
        //let shuffledQuotesData = this.shuffle(this.quote_list);
        //console.log("after shuffle ");
        //console.log(shuffledQuotesData);       

        //let myArr = [0, 1, 2, 3, 4];
        //console.log(myArr);
        //let shuf = this.shuffle(myArr);
        //console.log(shuf);

        
      }, () => {
        console.log("could not get random quote by selected character or author.");
      });
  }

  //************** Questions Selection Forms******************************//
  onQuestionFormSubmit(form: NgForm) {
    this.isValidFormSubmitted = false;
    
    if (form.invalid) {
      return;
    }

    this.isValidFormSubmitted = true;
    this.question_1_answer = form.controls['question1'].value;
    this.question_2_answer = form.controls['question2'].value;
    this.question_3_answer = form.controls['question3'].value;

    //console.log("Q-1 answer: " + this.question_1_answer);
    //console.log("Q-2 answer: " + this.question_2_answer);
    //console.log("Q-3 answer: " + this.question_3_answer);

    this.calculateCurrentScore(this.question_1_answer, this.question_2_answer, this.question_3_answer);
  }

/*****************  calculate the score **************************/
  calculateCurrentScore(answer1: any, answer2: any, answer3: any) {
    
    console.log(answer2);
    console.log(answer3);
    console.log(this.selectedCharacter);
    console.log(this.quote_list);
    console.log(this.quote_id_list);
    console.log(this.quote_author_list);
    //console.log(this.shuffledArr);

    let q1_correct_answer = this.selectedCharacter[0].status;
    console.log("q1 correct answer " + q1_correct_answer);
    console.log("q1 user answered " + answer1);
    if (answer1 == q1_correct_answer) {
      this.sumOfScore += 1;
    } else {
      this.sumOfScore += 0;
    }
    console.log(this.sumOfScore);
    let q2_correct_answer = this.selectedCharacter[0].appearance.length;
    let q2_correct_answer_str;
    if (q2_correct_answer == 5) {
      q2_correct_answer_str = "All";
    }
    else {
      q2_correct_answer_str = "Some";
    }
    console.log("q2 correct answer int " + q2_correct_answer);
    console.log("q2 correct answer str " + q2_correct_answer_str);
    console.log("q2 user answered " + answer2);
    if (q2_correct_answer_str == answer2) {
      this.sumOfScore += 1;
    }
    else {
      this.sumOfScore += 0;
    }
    console.log(this.sumOfScore);
    let q3_correct_answer = this.quote_list[0];
    console.log("q3 correct answer " + q3_correct_answer);
    console.log("q3 user answered " + answer3);
    if (q3_correct_answer == answer3) {
      this.sumOfScore += 1;

    } else {
      this.sumOfScore += 0;;
    }
    console.log(this.sumOfScore);
    console.log("your score is = " + this.sumOfScore);
    let scoreResult = "Your current score: " + this.sumOfScore;
    document.getElementById('game-result').innerText = scoreResult;

    this.newScore = this.sumOfScore;
    this.sumOfScore = 0;

    this.sendGame();

    return this.sumOfScore;
  }

  /************************************ SAVE GAME TO DB  **********************/
  sendGame(){

    //this.gameService.getUser(1).subscribe(
      //(response7: User) => {
        //this.user = response7;
      //}
    //)
    //console.log(this.user);

    let now = new Date();
    console.log("now " + now);

    let game = new Games(0, this.newScore, now, this.gameService.userId);
    console.log(game);

    this.gameService.addGame(game).subscribe(
      (response: Games) => {
        this.game = response;
      }
    )
  }

/*****************  print shuffled the quotes to view **************************/
  printShuffledQuotes(array: any) {}

  /*****************  shuffle the quotes **************************/
  shuffle(array: any): any {
    var currentIndex = array.length, temporaryValue, randIndex;
    while (0 !== currentIndex) {
      randIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randIndex];
      array[randIndex] = temporaryValue;
    }
    return array;
  }

  refreshPage() {
    window.location.reload();
  }

/*************************** ***********************/
  getAllUser() {
    this.gameService.getAllUser().subscribe(
      (response: User[]) => {
        this.users = response;
        console.log(this.users);
      }
      
    );


  }

  


}


