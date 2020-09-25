import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';

import { TriviagameComponent } from './components/triviagame/triviagame.component';
//import { UserComponent } from './components/user/user.component';
import { LogoutComponent } from './components/logout/logout.component';
import { UserQuotesComponent } from './components/user-quotes/user-quotes.component';



const routes: Routes = [

  {
    path: 'profile/:userId',
    component: UserQuotesComponent,
    
  },
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'logout',
    component: LogoutComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'profile/:userId',
    component: ProfileComponent,
   
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'triviagame',
    component: TriviagameComponent
  },
  {
    path: '*',
    component: LoginComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
