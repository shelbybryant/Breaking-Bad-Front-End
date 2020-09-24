// https://www.freakyjolly.com/how-to-show-radio-input-listing-in-angular-6/#.X2dDWGhKiUk
// this is web site I used as an example

// in BB API, only certain characters has quotes
// here is the list of ITEMS, in this case, that characters have the quotes,
// quoteauthor, character name, charachter id on BB api
// https://breakingbadapi.com/playground
//quoteauthor: string;
//chractername: string;
//characterid: number;

// importing item.ts
import { Item } from './item';

export const ITEMS: Item[] = [
  {
    quoteauthor: 'Walter White',
    charactername: 'Walter White',
    characterid: 1
  },
  {
    quoteauthor: 'Jesse Pinkman',
    charactername: 'Jesse Pinkman',
    characterid: 2
  },
  {
    quoteauthor: 'Skyler White',
    charactername: 'Skyler White',
    characterid: 3
  },
  {
    quoteauthor: 'Hank Schrader', 
    charactername: 'Henry Schrader',
    characterid: 5
  },
  {
    quoteauthor: 'Mike Ehrmantraut',
    charactername: 'Mike Ehrmantraut',
    characterid: 7
  },
  {
    quoteauthor: 'Saul Goodman',
    charactername: 'Saul Goodman',
    characterid: 8
  },
  {
    quoteauthor: 'Gus Fring',
    charactername: 'Gustavo Fring',
    characterid: 9
  },
  {
    quoteauthor: 'Hector Salamanca',
    charactername: 'Hector Salamanca',
    characterid: 10
  },
  {
    quoteauthor: 'Jimmy McGill', //  Saul Goodman is Jimmy McGill? 
    charactername: 'Saul Goodman',
    characterid: 8
  },
  {
    quoteauthor: 'Chuck McGill',
    charactername: 'Charles McGill',
    characterid: 114
  },
  {
    quoteauthor: 'Kim Wexler',
    charactername: 'Kimberly Wexler',
    characterid: 112
  }
];
