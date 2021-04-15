import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { Recipe, User } from 'src/app/Models/RecipeModel';
import { RecipesrvcService } from 'src/app/Services/recipesrvc.service';

@Component({
  selector: 'app-viewfriendrecipes',
  templateUrl: './viewfriendrecipes.component.html',
  styleUrls: ['./viewfriendrecipes.component.css']
})
export class ViewfriendrecipesComponent implements OnInit {
  recipesid:[string];
  subscription:Subscription;

  constructor(@Inject(MAT_DIALOG_DATA) public data: [string], private _recipesrvc:RecipesrvcService) { }
  displayrecipes:[Recipe] = [] as any;
  ngOnInit(): void {
    this.recipesid = this.data['recipesid']
    for (let index = 0; index < this.recipesid.length; index++) {
      var tmprecipe      
      this.subscription = this._recipesrvc.findrecipe(this.recipesid[index]).subscribe(temp => {tmprecipe=temp;       
       if(tmprecipe !=null)
        {this.displayrecipes.push(tmprecipe);}  });

    }
  }

}
