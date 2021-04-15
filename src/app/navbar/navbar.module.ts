import { NgModule } from '@angular/core';
import {NavbarComponent} from './navbar.component';
import { RouterModule } from '@angular/router';
import { NavbarRoutingModule } from './navbar-routing.module';
import { ScrollingRecipeModule } from '../scrolling-recipe/scrolling-recipe.module';
import { RecipeDisplayModule } from '../recipe-display/Recipe-display.module';
import { CommonModule } from '@angular/common';
import { SearchrecipesComponent } from '../searchrecipes/searchrecipes.component';
import { FormsModule } from '@angular/forms';
import { UsersModule } from '../users/users.module';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';

import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import { MenubarmobileComponent } from './menubarmobile/menubarmobile.component';
import {MatMenuModule} from '@angular/material/menu';
import { SearchDialogueboxComponent } from './search-dialoguebox/search-dialoguebox.component';
import { MatDialogModule } from '@angular/material/dialog';
import {MatRippleModule} from '@angular/material/core';



@NgModule({
    declarations: [NavbarComponent, MenubarmobileComponent, SearchDialogueboxComponent ],
    imports: [RouterModule, NavbarRoutingModule,ScrollingRecipeModule, RecipeDisplayModule,CommonModule
      ,FormsModule,UsersModule,MatIconModule, MatFormFieldModule,MatTabsModule,MatToolbarModule,MatInputModule,MatRippleModule,MatMenuModule,MatDialogModule
    ],
    exports:[NavbarComponent]
    
  })
  export class NavbarModule { }