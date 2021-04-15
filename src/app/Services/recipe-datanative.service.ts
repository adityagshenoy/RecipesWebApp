import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { IRecipe } from '../Models/RecipeModel';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeDatanativeService {

  constructor(private http:HttpClient) { }

  //baseurl = "http://localhost:3000/recipe";
  baseurl = "https://ionian-cheerful-tomato.glitch.me/recipe";
  getUser(UserID:number):Observable<IRecipe>
{
  var url;
  url  = this.baseurl + "/"+ UserID;
  return this.http.get<IRecipe>(url)//.pipe(catchError(this.handleError));
}

}
