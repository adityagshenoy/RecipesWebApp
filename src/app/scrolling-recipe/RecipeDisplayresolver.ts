import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { RecipeDatanativeService } from '../Services/recipe-datanative.service';
import { RecipesrvcService } from '../Services/recipesrvc.service';
import { Recipe } from '../Models/RecipeModel';
import { map } from 'rxjs/operators';
@Injectable({
    providedIn: 'root'
})
export class RecipeDisplayResolver implements Resolve<any> {
    constructor(private recipesrvc:RecipesrvcService) { }
    recipe:Recipe;
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {

        const id = String(route.paramMap.get('id'))

        return this.recipesrvc.findrecipe(id).pipe(
            map(data => of({recipe:data})            
            )) // subscribe(recitemp => {this.recipe = recitemp;})
    }

    
}
