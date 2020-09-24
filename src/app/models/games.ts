/**
 * This is the game model for get information
 * from an user and send it to backend.
 * NOTE: score field is cumilative score for 
 * an user
 *
 * http://localhost:8080/BreakingBad/games
 * */
import { User } from '../models/user';

export class Games {

  public gameId: number;
  public score: number;
  public gameSubmitted: Date;
  public user: User;

  constructor(
    gameId: number,
    score: number,
    gameSubmitted: Date,
    user: User
  ) {
    this.gameId = gameId;
    this.score = score;
    this.gameSubmitted = gameSubmitted;
    this.user = user;
  }

}
