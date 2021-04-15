import { Component, OnDestroy, OnInit } from '@angular/core';
import { UsersrvcService } from 'src/app/Services/usersrvc.service';
import { ActivatedRoute } from '@angular/router';
import { Recipe, User } from 'src/app/Models/RecipeModel';
import { RecipesrvcService } from 'src/app/Services/recipesrvc.service';
import { ScrollingRecipeCardComponent } from 'src/app/scrolling-recipe/scrolling-recipe-card/scrolling-recipe-card.component';
import { concatMap } from 'rxjs/operators';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-favoritespage',
  templateUrl: './favoritespage.component.html',
  styleUrls: ['./favoritespage.component.css']
})
export class FavoritespageComponent implements OnInit,OnDestroy {
  
  id:string;
  favrecipesidarray:[string];
  favrecipes:[Recipe] = [] as any;
  subscription:Subscription;
  recipefetchsubscription:Subscription;
  searchrecipes:[Recipe]= [] as any;
  constructor(private _usrvc:UsersrvcService, private route:ActivatedRoute, private _recipesrvc:RecipesrvcService) { 
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.recipefetchsubscription.unsubscribe();
  }

  userfor:User = new User();

  ngOnInit(): void {
   // this.route.parent.params.subscribe(params => this.id = params["id"])
 
   this.id = this.route.parent.snapshot.params["id"];
    this._usrvc.getUser(this.id)


   this.subscription =  this._usrvc.getUser(this.id).subscribe(temp => 
      
      {this.userfor = temp;
      
        this.favrecipesidarray = this.userfor.FavRecipesId;
          
        for (let index = 0; index < this.favrecipesidarray.length; index++) {
          var tmprecipe:Recipe
          this.recipefetchsubscription =  this._recipesrvc.findrecipe(this.favrecipesidarray[index]).subscribe(temp => {tmprecipe=temp;                                                                                     
                                                                                    this.favrecipes.push(tmprecipe);  });
      }
    }
      );

  
}

}
