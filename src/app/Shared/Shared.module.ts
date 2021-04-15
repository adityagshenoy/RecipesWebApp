import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScrollingcustomDirective } from 'src/app/Shared/Directives/scrollingcustom.directive';
import { AttributescrollpositionDirective } from './Directives/attributescrollposition.directive';
import { ReadyTimePipe } from './Pipes/ready-time.pipe';
import { RouterModule } from '@angular/router';
import { AnimatedIFDirective } from './Directives/animated-if.directive';
import { IngredienthostDirective } from './Directives/ingredienthost.directive';
import { ProgressSpinnerComponent } from './CommonComponent/progress-spinner/progress-spinner.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { PopupelementDirective } from './Directives/popupelement.directive';
import { PopupcomponentComponent } from './CommonComponent/popupcomponent/popupcomponent.component';
import {MatFormFieldModule} from '@angular/material/form-field';

import { UsercardComponent } from './CommonComponent/usercard/usercard.component';
import { ViewfriendrecipesComponent } from './CommonComponent/usercard/viewfriendrecipes/viewfriendrecipes.component';
import { ViewfriendmadedupComponent } from './CommonComponent/usercard/viewfriendmadedup/viewfriendmadedup.component';

import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';

import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatSliderModule } from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import { AlertCommonComponent } from './CommonComponent/alert-common/alert-common.component';
import { ButtontooltipcustDirective } from './Directives/buttontooltipcust.directive';


@NgModule({
  declarations: [ScrollingcustomDirective, AttributescrollpositionDirective, ReadyTimePipe, AnimatedIFDirective,UsercardComponent,ViewfriendmadedupComponent
    , AlertCommonComponent,IngredienthostDirective, ProgressSpinnerComponent, PopupelementDirective, PopupcomponentComponent,ViewfriendrecipesComponent ,ButtontooltipcustDirective],
  imports: [RouterModule,MatProgressSpinnerModule,CommonModule
    ,MatFormFieldModule,MatCardModule,MatDialogModule,MatInputModule,MatCheckboxModule,MatButtonModule
  ],
  exports:[ScrollingcustomDirective,ReadyTimePipe,ProgressSpinnerComponent, PopupelementDirective, AnimatedIFDirective, UsercardComponent,ViewfriendrecipesComponent,ViewfriendmadedupComponent]
})
export class SharedModule { }
