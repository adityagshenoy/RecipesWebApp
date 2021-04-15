import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersComponent } from './users.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { UserForgotPasswordComponent } from './user-forgot-password/user-forgot-password.component';
import { UserSignInComponent } from './user-sign-in/user-sign-in.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { FavoritespageComponent } from './favoritespage/favoritespage.component';
import { ImadeitpageComponent } from './imadeitpage/imadeitpage.component';
import { FriendspageComponent } from './friendspage/friendspage.component';
import { MyPersonalRecipespageComponent } from './my-personal-recipespage/my-personal-recipespage.component';
import { MyPhotospageComponent } from './my-photospage/my-photospage.component';
import { MyReviewspageComponent } from './my-reviewspage/my-reviewspage.component';
import { UserProfileEditComponent } from './user-profile-edit/user-profile-edit.component';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { LoggedInGaurd } from './Gaurds/LoggedIn';
import { UseraddrecipeComponent } from './useraddrecipe/useraddrecipe.component';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  
  
  { path: 'userregister',  component: UserRegisterComponent },
  { path: 'userforgotpassword/:id',  component: UserForgotPasswordComponent },
  { path: 'logout',  component: LogoutComponent },
  { path: 'userlogin',  component: UserSignInComponent },
  { path: 'usereditprofile/:id',  component: UserProfileEditComponent },
  
  { path: 'userpages',  component: UseraddrecipeComponent },
  
  
  

  {path: 'userpages/:id',
  component: UsersComponent, canActivate:[LoggedInGaurd],
 
  children: [
  { path: 'aboutme', component: AboutmeComponent },
  { path: 'favorites', component: FavoritespageComponent },
  { path: 'imadeit', component: ImadeitpageComponent },
  { path: 'friends', component: FriendspageComponent },
  { path: 'personalrecipes', component: MyPersonalRecipespageComponent },
  { path: 'myphotos', component: MyPhotospageComponent },
  { path: 'myreviews', component: MyReviewspageComponent },
  { path: 'addrecipe',  component: UseraddrecipeComponent },
]
  },
  { path: '',   redirectTo: '/homepage', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
