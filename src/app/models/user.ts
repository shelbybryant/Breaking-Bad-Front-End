export class User {

  public userId: number;
  public screenName: string;
  public email: string;
  public password: string;
  public runningTotal: number;
  public gameTotal: number;


  constructor(
    userId: number,
    screenName: string,
    email: string,
    password: string,
    runningTotal: number,
    gameTotal: number

  ) {
    this.userId = userId;
    this.screenName = screenName;
    this.email = email;
    this.password = password;
    this.runningTotal = runningTotal;
    this.gameTotal = gameTotal;
  }


}
