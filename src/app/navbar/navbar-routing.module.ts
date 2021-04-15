import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Scrollingrecipedata } from '../scrolling-recipe/ScrollingRecipeData';
import { ScrollingRecipeComponent } from '../scrolling-recipe/scrolling-recipe.component';
import { UserRegisterComponent } from '../users/user-register/user-register.component';
import { UserSignInComponent } from '../users/user-sign-in/user-sign-in.component';
import { SearchrecipesComponent } from '../searchrecipes/searchrecipes.component';
import { CategoryRcpAuthComponent } from '../scrolling-recipe/category-recipe-auth/category-rcp-auth.component';


const routes: Routes = [
  { path: 'homepage',  component: CategoryRcpAuthComponent },
  { path: 'usersignin',  component: UserSignInComponent },
  { path: 'searchrecipe/:id',  component: SearchrecipesComponent },
  { path: '',   redirectTo: '/homepage', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  
  exports: [RouterModule]
})
export class NavbarRoutingModule { }
