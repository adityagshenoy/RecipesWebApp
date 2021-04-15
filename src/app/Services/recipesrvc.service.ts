import { Injectable } from '@angular/core';
import { Recipe } from '../Models/RecipeModel';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipesrvcService {

  constructor(private http:HttpClient) { }
  baseurl = "https://ionian-cheerful-tomato.glitch.me/recipe";
  //baseurl = "http://localhost:3000/recipe";
  
  
  addrecipe(recipe:Recipe):Observable<Recipe>
  {    
   return this.http.post<Recipe>(this.baseurl, recipe);
  }

  findrecipeall(numberofr:Number, pagenum:Number):Observable<Recipe[]>
  {
    var url;
    url  = this.baseurl +"/start";
    const options = 
    { headers: new HttpHeaders().set('count', String( numberofr)).set('pagenum', String( pagenum)),    
  };
    return this.http.get<Recipe[]>(url, options)  //.pipe(catchError(this.handleError));
  }

  findrecipe(recipeid:string):Observable<Recipe>
  {
    var url;
    url  = this.baseurl + "/"+ recipeid;
    return this.http.get<Recipe>(url)  //.pipe(catchError(this.handleError));
  }

  findrecipebyUser(userID:string):Observable<Recipe[]>
  {
    var url;
    url  = this.baseurl + "/byuser";
    const options = 
    { headers: new HttpHeaders().set('UserID', String( userID)),    
  };
    return this.http.get<Recipe[]>(url,options)  //.pipe(catchError(this.handleError));
  }

  searchrecipe(keywords):Observable<[Recipe]>
  {
    var url;
    url  = this.baseurl +"/search";
    const options = 
    { headers: new HttpHeaders().set('keywords', keywords),    
  };
    return this.http.get<[Recipe]>(url,options) 

  }

}
