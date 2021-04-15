import { Component, OnInit, Input } from '@angular/core';
import { IRecipe } from 'src/app/Models/RecipeModel';

@Component({
  selector: 'app-scrolling-recipe-card',
  templateUrl: './scrolling-recipe-card.component.html',
  styleUrls: ['./scrolling-recipe-card.component.css']
})
export class ScrollingRecipeCardComponent implements OnInit {

  @Input() recipeCard:IRecipe;

  
  displaysummary:string;

  constructor() { }

  ngOnInit(): void {
    
    
    
    var playsummary = this.recipeCard.summary.split(' ',15);


    this.displaysummary = playsummary.join(' ') + " ....";

  }

}
