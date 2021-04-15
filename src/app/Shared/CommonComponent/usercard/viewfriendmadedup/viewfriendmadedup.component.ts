import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Recipe } from 'src/app/Models/RecipeModel';
import { RecipesrvcService } from 'src/app/Services/recipesrvc.service';

@Component({
  selector: 'app-viewfriendmadedup',
  templateUrl: './viewfriendmadedup.component.html',
  styleUrls: ['./viewfriendmadedup.component.css']
})
export class ViewfriendmadedupComponent implements OnInit {
  userID: any;
  recipebyuserobservable:Observable<Recipe[]>;

  constructor(@Inject(MAT_DIALOG_DATA) public data: [string], private _recipesrvc:RecipesrvcService) { }

  ngOnInit(): void {
    
    this.userID = this.data['UserID'];
    this.recipebyuserobservable = this._recipesrvc.findrecipebyUser(this.userID);
  }

}
