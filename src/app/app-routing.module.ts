import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';
import { UserComponent } from './components/user/user.component';
import { LogoutComponent } from './components/logout/logout.component';
import { AuthGuard } from 'src/app/services/auth-guard.service';


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
    canActivate:[AuthGuard]
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'profile/:id',
    component: ProfileComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'user',
    component: UserComponent,
    canActivate:[AuthGuard]
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
