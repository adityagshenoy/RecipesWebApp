import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  
  
  //{ path: 'addreview',  component: AddReviewdialogComponent },
//   { path: 'userforgotpassword/:id',  component: UserForgotPasswordComponent },
//  // { path: 'user',  component: UserpagesComponent },
//   { path: 'userlogin',  component: UserSignInComponent },
//   { path: 'usereditprofile/:id',  component: UserProfileEditComponent },
  
//   { path: 'editreview',  component: UseraddrecipeComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipeDisplayRoutingModule { }
