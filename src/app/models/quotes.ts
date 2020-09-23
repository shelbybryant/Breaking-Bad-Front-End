export class Quotes {

  quoteId: number; 
  userId: number;  
  quote: string;    
  authorFName: string;
  authorLName: string;

  constructor(quoteId: number, userId: number, quote: string, authorFName: string, authorLName: string) {
    this.quoteId = quoteId;
    this.userId = userId;
    this.quote = quote;
    authorFName = authorFName;
    authorLName = authorLName;
  }




}
