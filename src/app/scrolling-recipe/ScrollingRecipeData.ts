import { Injectable, EventEmitter, Component, Output } from '@angular/core';
import { RecipeDataService } from '../Services/recipe-data.service';
import { IRecipe, Recipe } from '../Models/RecipeModel';
import { Observable, Subject, Observer } from 'rxjs';
import { RecipesrvcService } from '../Services/recipesrvc.service';

@Component({
  selector: 'app-recipe-random',
  templateUrl: './recipe-random.component.html',
 // styleUrls: ['./scrolling-recipe.component.css'],
 // providers:[ScrollingrecipedataService]
})


///Will emit 12 new recipe objects every time user prompts (a scroll down).
export class Scrollingrecipedata {

 @Output() randomrecipesprop = new EventEmitter<IRecipe[]>();

    recipes:Recipe[] = [] as any;
    
    pagenum:number;
  subscription: any;
  constructor(private _recipesrvc:RecipeDataService, private recpehttpservc:RecipesrvcService) { 
    

  }

  ngOnInit(): void {
    
   this.pagenum=0;
   this.randomrecipes(this.pagenum);
    
  }

///Recipe service fetches 12 recipes on every scroll down. pagenum variable increments after every scroll down@Debounce(1000)
randomrecipes(pagenum:number):void{

 this.subscription = this.recpehttpservc.findrecipeall(12,pagenum).subscribe(
  
  temprecipes =>{ this.recipes= temprecipes;
    
    //   this.recipes = this.recipes['recipes']
      this.randomrecipesprop.emit(this.recipes);},
      (error) => {        
        });
  }
  

  }
function Debounce(arg0: number) {
  throw new Error('Function not implemented.');
}

