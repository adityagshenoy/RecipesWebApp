import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Recipe } from '../Models/RecipeModel';
import { RecipesrvcService } from '../Services/recipesrvc.service';

@Component({
  selector: 'app-searchrecipes',
  templateUrl: './searchrecipes.component.html',
  styleUrls: ['./searchrecipes.component.css']
})
export class SearchrecipesComponent implements OnInit,OnDestroy {

  searchtext:string;
  recipesseacrhed:any;
  subscription:Subscription;
  routesubscription:Subscription;
  finaloutputsearch:[Recipe] = [] as any;
  constructor( private recipesrvc:RecipesrvcService, private route:ActivatedRoute) { }
 
  ngOnInit(): void {
    
      this.routesubscription = this.route.params.subscribe(params => {
      this.searchtext = params['id'];

      this.subscription =  this.recipesrvc.searchrecipe(this.searchtext).subscribe( recipesreturned => {
       this.recipesseacrhed = null;
       this.finaloutputsearch = [] as any;
       this.recipesseacrhed = [] as any;
        this.recipesseacrhed=recipesreturned;        
        // var recipesfetched = this.recipesseacrhed[0];
         for (let index = 0; index < this.recipesseacrhed.length; index++) {
           for (let indexinner = 0; indexinner < this.recipesseacrhed[index].length; indexinner++) {
            this.finaloutputsearch.push(this.recipesseacrhed[index][indexinner]);                                                                           
           }                                                                                 
         }        
        }
          ,error => console.log(error)  
        );       
      });
      }
       
  ngOnDestroy(): void {
    this.routesubscription.unsubscribe()
    this.subscription.unsubscribe()
  }

    
}
