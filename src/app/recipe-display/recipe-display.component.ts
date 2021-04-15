import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { IRecipe, Recipe } from '../Models/RecipeModel';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeDataService } from '../Services/recipe-data.service';
import { ɵINTERNAL_BROWSER_DYNAMIC_PLATFORM_PROVIDERS } from '@angular/platform-browser-dynamic';
import { RecipesrvcService } from '../Services/recipesrvc.service';
import { LoggedinemitService } from '../Services/loggedinemit.service';
import {MatButtonModule} from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { AddReviewdialogComponent } from './add-reviewdialog/add-reviewdialog.component';
import { UsersrvcService } from '../Services/usersrvc.service';
import { PopupelementDirective } from '../Shared/Directives/popupelement.directive';

import { AnimatedIFDirective } from '../Shared/Directives/animated-if.directive';
import { ReadyTimePipe } from '../Shared/Pipes/ready-time.pipe';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-display',
  templateUrl: './recipe-display.component.html',
  styleUrls: ['./recipe-display.component.css']
})
export class RecipeDisplayComponent implements OnInit,OnDestroy {

   
  recipe:IRecipe= new Recipe();
  loggedinsrvcsubscription:Subscription;
  recipefetchsubscription:Subscription;
  isLoggedin: boolean;
  //priroty dishTypes-> occasions -> diets
  constructor(private router: Router,private route: ActivatedRoute, //private datasrvc:RecipeDataService, 
     private loggedinsrvc:LoggedinemitService, public dialog: MatDialog, private usersrvc:UsersrvcService) { 
    
    
    
  }
    
  

  ngOnInit(): void {    
    const listData = this.route.snapshot.data.recipe;
    
    this.recipefetchsubscription = listData.subscribe( data => this.recipe = data["recipe"])
   


     this.loggedinsrvcsubscription = this.loggedinsrvc.emitloggedingaurd().subscribe(tmp => this.isLoggedin=tmp);    
  }
  ngOnDestroy(): void {
    this.loggedinsrvcsubscription.unsubscribe();
    this.recipefetchsubscription.unsubscribe();
  }

  openReviewDialog() {
    this.dialog.open(AddReviewdialogComponent, {
      data:{
        recipeid:this.recipe.Recipeid,
        recipename:this.recipe.title,
      }
    });
  }


  addFriend()
  {
    var userid = sessionStorage.getItem('UserID')
    this.usersrvc.addFriend(userid, this.recipe.UserID)
  }

}
