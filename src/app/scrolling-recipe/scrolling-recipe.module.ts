import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Scrollingrecipedata } from './ScrollingRecipeData';
import { ScrollingRecipeComponent } from './scrolling-recipe.component';
import { RecipeDataService } from '../Services/recipe-data.service';
import { ScrollingRecipeCardComponent } from './scrolling-recipe-card/scrolling-recipe-card.component';
import { ScrollingRecipeRoutingModule } from './scrolling-recipe-routing-module';

import { RouterModule } from '@angular/router';
import { SearchrecipesComponent } from '../searchrecipes/searchrecipes.component';
import { SharedModule } from '../Shared/Shared.module';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CategoryRcpAuthComponent } from './category-recipe-auth/category-rcp-auth.component';
import {MatTabsModule} from '@angular/material/tabs';
import { AllauthorsComponent } from './allauthors/allauthors.component';
import { UsercardComponent } from '../Shared/CommonComponent/usercard/usercard.component';




@NgModule({
  declarations: [ScrollingRecipeComponent, Scrollingrecipedata, ScrollingRecipeCardComponent, SearchrecipesComponent, CategoryRcpAuthComponent, AllauthorsComponent],
  imports: [MatCardModule,
    RouterModule, CommonModule,ScrollingRecipeRoutingModule, SharedModule,MatFormFieldModule, MatTabsModule
  ],
  exports:[ScrollingRecipeComponent, ScrollingRecipeCardComponent],
  providers:[RecipeDataService]
  
})
export class ScrollingRecipeModule { }
