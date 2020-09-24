import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';

import { TriviagameComponent } from './components/triviagame/triviagame.component';
import { UserComponent } from './components/user/user.component';
import { LogoutComponent } from './components/logout/logout.component';
import { AuthGuardService } from 'src/app/services/auth-guard.service';

const routes: Routes = [

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
    canActivate:[AuthGuardService]
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate:[AuthGuardService]
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate:[AuthGuardService]
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate:[AuthGuardService]
  },
  {
    path: 'user',
    component: UserComponent,
    canActivate:[AuthGuardService]
  },
  {
    path: 'triviagame',
    component: TriviagameComponent,
    canActivate:[AuthGuardService]
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
