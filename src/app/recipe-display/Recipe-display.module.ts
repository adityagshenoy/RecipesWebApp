import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeDisplayComponent } from './recipe-display.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../Shared/Shared.module';
import { SearchrecipesComponent } from '../searchrecipes/searchrecipes.component';
import {MatButtonModule} from '@angular/material/button';

import { RecipeDisplayRoutingModule } from './recipe-display-routing.module';
import {MatDialogModule} from '@angular/material/dialog';
import { AddReviewdialogComponent } from './add-reviewdialog/add-reviewdialog.component';
import {MatInputModule} from '@angular/material/input';
import { FoodmapsearchComponent } from './foodmapsearch/foodmapsearch.component';
import { AgmCoreModule } from '@agm/core';
import { PopupelementDirective } from '../Shared/Directives/popupelement.directive';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  declarations: [RecipeDisplayComponent, AddReviewdialogComponent, FoodmapsearchComponent],
  imports: [RouterModule,CommonModule, SharedModule, MatButtonModule, RecipeDisplayRoutingModule,MatDialogModule,MatInputModule,MatFormFieldModule
   , AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB6A8_-tQbbb7bOtu9sRMfo48_Xu2Mi-Ng'
    })  
  ],
  exports:[RecipeDisplayComponent],
  providers:[]
  
})
export class RecipeDisplayModule { 

}
