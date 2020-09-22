
  import { Component, OnInit } from '@angular/core';
  import { ActivatedRoute } from '@angular/router';
  import { AuthenticationService } from 'src/app/services/authentication-service.service';
  
  @Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
  })
  
  export class ProfileComponent implements OnInit {
    currentUser: Object = {};
  
    constructor(
      public authenticationService: AuthenticationService,
      private actRoute: ActivatedRoute
    ) {
      let id = this.actRoute.snapshot.paramMap.get('id');
      this.authenticationService.getUserProfile(id).subscribe(res => {
        this.currentUser = res.msg;
      })
    }
  
    ngOnInit() { }
}
