import { NgModule } from '@angular/core';


import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { UserForgotPasswordComponent } from './user-forgot-password/user-forgot-password.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { UserSignInComponent } from './user-sign-in/user-sign-in.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { FavoritespageComponent } from './favoritespage/favoritespage.component';
import { FriendspageComponent } from './friendspage/friendspage.component';
import { ImadeitpageComponent } from './imadeitpage/imadeitpage.component';
import { MyPersonalRecipespageComponent } from './my-personal-recipespage/my-personal-recipespage.component';
import { MyPhotospageComponent } from './my-photospage/my-photospage.component';
import { MyReviewspageComponent } from './my-reviewspage/my-reviewspage.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserProfileEditComponent } from './user-profile-edit/user-profile-edit.component';

import { TooltipComponent } from '../tooltip/tooltip.component';

import { UseraddrecipeComponent } from './useraddrecipe/useraddrecipe.component';
import { DynamicingredientComponent } from './useraddrecipe/dynamicingredient/dynamicingredient.component';
import { SharedModule } from '../Shared/Shared.module';
import { DynamicinstrutionsComponent } from './useraddrecipe/dynamicinstrutions/dynamicinstrutions.component';


import { CommonModule } from '@angular/common';


import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatSliderModule } from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';

import { ScrollingRecipeCardComponent } from '../scrolling-recipe/scrolling-recipe-card/scrolling-recipe-card.component';
import { ScrollingRecipeModule } from '../scrolling-recipe/scrolling-recipe.module';
import { EditReviewdialogComponent } from './my-reviewspage/edit-reviewdialog/edit-reviewdialog.component';
import { ReviewcardComponent } from './my-reviewspage/reviewcard/reviewcard.component';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import { LogoutComponent } from './logout/logout.component';
//import { UsercardComponent } from './usercard/usercard.component';
import { FriendmaderecipesComponent } from './friendspage/friendmaderecipes/friendmaderecipes.component';
import {MatFormFieldModule} from '@angular/material/form-field';
// import { ViewfriendrecipesComponent } from './usercard/viewfriendrecipes/viewfriendrecipes.component';
// import { ViewfriendmadedupComponent } from './usercard/viewfriendmadedup/viewfriendmadedup.component';
import {MatIconModule} from '@angular/material/icon';
//import { ButtontooltipcustDirective } from '../Shared/Directives/buttontooltipcust.directive';


@NgModule({
  declarations: [UsersComponent, TooltipComponent,UserForgotPasswordComponent, UserRegisterComponent, UserSignInComponent, AboutmeComponent, 
    FavoritespageComponent, FriendspageComponent, ImadeitpageComponent, MyPersonalRecipespageComponent,
     MyPhotospageComponent, MyReviewspageComponent, UserProfileEditComponent, UseraddrecipeComponent, DynamicingredientComponent, DynamicinstrutionsComponent, EditReviewdialogComponent, ReviewcardComponent, LogoutComponent, FriendmaderecipesComponent],
  imports: [
    UsersRoutingModule,CommonModule,ScrollingRecipeModule,
    FormsModule,ReactiveFormsModule, SharedModule, MatCheckboxModule,MatSliderModule,MatButtonModule,MatTabsModule,MatCardModule,
    MatDialogModule,MatInputModule,MatFormFieldModule, MatIconModule

  ]
})
export class UsersModule { }
