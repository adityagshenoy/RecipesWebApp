import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Scrollingrecipedata } from './ScrollingRecipeData';
import { IRecipe } from '../Models/RecipeModel';
import { Scroll } from '@angular/router';
import { ScrollpositionService } from '../Services/scrollposition.service';
import { BehaviorSubject, interval, Observable, timer } from 'rxjs';
import { debounce, debounceTime, timeout } from 'rxjs/operators';
import { RecipesrvcService } from '../Services/recipesrvc.service';

@Component({
  selector: 'app-scrolling-recipe',
  templateUrl: './scrolling-recipe.component.html',
  styleUrls: ['./scrolling-recipe.component.css'],
  
})
export class ScrollingRecipeComponent implements OnInit {
displayrecipes:IRecipe[];
recipesobtained:IRecipe[];
recipes:IRecipe[];
scrollprop: any;
pagenum:number = 0;
 scrollsubject : BehaviorSubject<Number>;

  constructor(public scrollvalue:ScrollpositionService, private recpehttpservc:RecipesrvcService) { }

  ngOnInit(): void {
    this.scrollsubject = new BehaviorSubject(0);
    this.positionlogger();
  }
  
  

   getYPosition(e: Event): number {
    return (e.target as Element).scrollTop;
  }
  
  @HostListener('window:scroll', ['$event'])
  scrolled(event: any): void {
        const position = window.scrollY + window.innerHeight;

        ////create a subject behavior for ths scroll event and debounce it.
        if(this.isUserNearBottom())
        {
          this.scrollsubject.next(1);          
        } 
  }
  
    public positionlogger()
    {
      const debouncedevent = this.scrollsubject.pipe(debounce(() => timer(1000)))
      debouncedevent.subscribe(text => {this.pagenum++;
                                        this.recpehttpservc.findrecipeall(12,this.pagenum).subscribe(                                    
                                          temprecipes =>{ this.recipes= temprecipes;                                                                                        
                                            this.recipes.forEach(element => {
                                              this.displayrecipes.push(element);
                                            });
                                              }
                                        )    
    });

    }
    
  private isUserNearBottom(): boolean {
    const threshold = 300;
    const position = window.scrollY + window.innerHeight; 
    const height = document.body.scrollHeight; 
    return position > height - threshold;
  }


  

  getRandomRecipe(event:any):void
  {
    this.displayrecipes = event;
  }

}

