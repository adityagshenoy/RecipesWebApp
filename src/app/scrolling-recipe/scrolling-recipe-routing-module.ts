import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipeDisplayComponent } from '../recipe-display/recipe-display.component';
import { RecipeDisplayResolver } from './RecipeDisplayresolver';


const routes: Routes = [
    { path: 'recipedisplay/:id', component: RecipeDisplayComponent, resolve: { recipe: RecipeDisplayResolver } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScrollingRecipeRoutingModule { }
