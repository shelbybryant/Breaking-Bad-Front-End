import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { Router } from '@angular/router';
import { AuthenticationService } from './../../shared/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  constructor(
    public fb: FormBuilder,
    public authenticationService: AuthenticationService,
    public router: Router
  ) {
    this.registerForm = this.fb.group({
      email: [''],
      password: [''],
      scrname: ['']
    })
  }

  ngOnInit() {}
  
  registerUser() {
    this.authenticationService.createNewUser(this.registerForm.value).subscribe((res) => {
      if (res.result) {
        this.registerForm.reset()
        this.router.navigate(['login']);
      }
    })
  }
}



  
  
