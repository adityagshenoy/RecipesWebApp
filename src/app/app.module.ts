//import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { NavbarModule } from './navbar/navbar.module';
import { ScrollingRecipeComponent } from './scrolling-recipe/scrolling-recipe.component';
import { ScrollingRecipeModule } from './scrolling-recipe/scrolling-recipe.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { RecipeDisplayComponent } from './recipe-display/recipe-display.component';
import { RecipeDisplayModule } from './recipe-display/Recipe-display.module';

import { ScrollingcustomDirective } from './Shared/Directives/scrollingcustom.directive';
import { UsersModule } from './users/users.module';

import { TooltipComponent } from './tooltip/tooltip.component';
import { ParentcomptooltipComponent } from './tooltip/parentcomptooltip/parentcomptooltip.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchrecipesComponent } from './searchrecipes/searchrecipes.component';
import { AlertCommonComponent } from './Shared/CommonComponent/alert-common/alert-common.component'
import { InterceptorService } from './Services/Interceptortest';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { SharedModule } from './Shared/Shared.module';
import { OverlayModule } from '@angular/cdk/overlay';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [
    AppComponent,
    ParentcomptooltipComponent,
    
    
    
    
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
    AppRoutingModule,
    NavbarModule,ScrollingRecipeModule,HttpClientModule,RecipeDisplayModule,
    UsersModule, SharedModule,
    OverlayModule,MatDialogModule,MatFormFieldModule,MatIconModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS,
    useClass: InterceptorService,
    multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
