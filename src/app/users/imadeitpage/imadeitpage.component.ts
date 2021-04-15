import { Component, OnInit } from '@angular/core';
import { Recipe, User } from 'src/app/Models/RecipeModel';
import { UsersrvcService } from 'src/app/Services/usersrvc.service';
import { ActivatedRoute } from '@angular/router';
import { RecipesrvcService } from 'src/app/Services/recipesrvc.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-imadeitpage',
  templateUrl: './imadeitpage.component.html',
  styleUrls: ['./imadeitpage.component.css']
})
export class ImadeitpageComponent implements OnInit {
  id:string;
  submittedrecipesidarray:[string];
  submittedrecipes:Recipe[] = [] as any;
  constructor( private route:ActivatedRoute, private _recipesrvc:RecipesrvcService) { 
  }

  userfor:User = new User();
  recipebyuserobservable:Observable<Recipe[]>;

  ngOnInit(): void {
 //this.id = this.route.snapshot['_urlSegment']['segments'][1]['path'];
  this.id = this.route.parent.snapshot.params["id"];
  this.recipebyuserobservable = this._recipesrvc.findrecipebyUser(this.id);//.subscribe(fetchedrecipesbyuser => {this.submittedrecipes = fetchedrecipesbyuser;},
                                                      //    )
}

}
