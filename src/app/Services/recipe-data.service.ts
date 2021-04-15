import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from '@angular/common/http';
import { IRecipe } from '../Models/RecipeModel';
import {TempJOKES, TempRECIPES, TempTrivia } from './TempRecipearray';


@Injectable({
  providedIn: 'root'
})
export class RecipeDataService {

baseUrl:string = "https://api.spoonacular.com/";
apiKey :string = '208375bcdac844098ca3519ccc9bb763';




  constructor(private _http:HttpClient) { 
    
  }


  getRecipeInformation(Recipeid:number):Observable<IRecipe>
  {
  //    var queryparamsbuilder:string;
  //    queryparamsbuilder = "recipes/"+Recipeid +"/information?apiKey=" + this.apiKey;
  //   var randomreccipeurl = this.baseUrl + queryparamsbuilder ;
  

  //    return this._http.get<any>(randomreccipeurl)

  var reqdrecipes:any[] = TempRECIPES['recipes']
  var reqdrecipe = reqdrecipes.find(x => x.id==Recipeid);
  
  var reciperandom =  new Observable<any>(observer => {
    observer.next(reqdrecipe);
 });
 return  reciperandom;

  }


  getRandomRecipes(numberRandomRecipes:number):Observable<IRecipe[]>
  {
   
   // var headers:HttpHeaders = new HttpHeaders();
    //headers.append('Content-Type', 'application/json');
   // headers.append('apiKey', this.apiKey);

  //  var params:HttpParams = new HttpParams();
  //  params.append('number', String(numberRandomRecipes) )
  // params.append('apiKey', this.apiKey)
  
  //   var queryparamsbuilder:string;
  //   queryparamsbuilder = "recipes/random?apiKey=" + this.apiKey +"&number="+ numberRandomRecipes;
  //  var randomreccipeurl = this.baseUrl + queryparamsbuilder ;
  

  //   return this._http.get<any[]>(randomreccipeurl,{params})


    var reciperandom =  new Observable<any>(observer => {
       observer.next(TempRECIPES);
    });
    return  reciperandom;
  }

  getRandomQuotes():Observable<IRecipe[]>
  {
   
    var quiotesurl = this.baseUrl + "food/trivia/random";
   // var headers:HttpHeaders = new HttpHeaders();
    //headers.append('Content-Type', 'application/json');
   // headers.append('apiKey', this.apiKey);

  //  var params:HttpParams = new HttpParams();
  //  params.append('number', String(numberRandomRecipes) )
  // // params.append('apiKey', this.apiKey)
  
  //    var queryparamsbuilder:string;
  //    queryparamsbuilder = "?apiKey=" + this.apiKey;
  //    quiotesurl = quiotesurl+ queryparamsbuilder ;
  

  //    return this._http.get<any[]>(quiotesurl)



     var reciperandom =  new Observable<any>(observer => {
      observer.next(TempTrivia);
   });
   return  reciperandom;

 

    // var reciperandom =  new Observable<any>(observer => {
    //    observer.next(TempRECIPES);
    // });
    // return  reciperandom;
  }






  getRandomJokes():Observable<IRecipe[]>
  {
   
    var jokeurl = this.baseUrl + "food/jokes/random";
   // var headers:HttpHeaders = new HttpHeaders();
    //headers.append('Content-Type', 'application/json');
   // headers.append('apiKey', this.apiKey);

  //  var params:HttpParams = new HttpParams();
  //  params.append('number', String(numberRandomRecipes) )
  // params.append('apiKey', this.apiKey)
  
  //    var queryparamsbuilder:string;
  //    queryparamsbuilder = "?apiKey=" + this.apiKey;
  //    jokeurl = jokeurl + queryparamsbuilder ;
  

  //    return this._http.get<any[]>(jokeurl)

 

    // var reciperandom =  new Observable<any>(observer => {
    //    observer.next(TempRECIPES);
    // });
    // return  reciperandom;

    var reciperandom =  new Observable<any>(observer => {
      observer.next(TempJOKES);
   });
   return  reciperandom;
  }




}
