import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


import { Observable } from 'rxjs';
import { Review } from '../Models/RecipeModel';

@Injectable({
  providedIn: 'root'
})
export class ReviewSrvcService {

  constructor(private http:HttpClient) { }

  
 baseurl = "https://ionian-cheerful-tomato.glitch.me/reviews";
  //baseurl = "http://localhost:3000/reviews";
  
  addReview(Review:Review):Observable<Review>
  {
   return this.http.post<Review>(this.baseurl, Review);
  }

  findReviewbyuser(Userid:string):Observable<Review[]>
  {    
    const options = 
    { headers: new HttpHeaders().set('ReviewUserID', Userid),    
  };
    var url;
    url  = this.baseurl;
    return this.http.get<Review[]>(url, options)  //.pipe(catchError(this.handleError));
  }


  findReviewbyrecipe(Recipeid:string):Observable<Review[]>
  {
    var url;
    url  = this.baseurl;
    const options = 
    { headers: new HttpHeaders().set('Reviewrecipeid', Recipeid),    
  };
    return this.http.get<Review[]>(url, options)  //.pipe(catchError(this.handleError));
  }

  findReviewbyrecipeandUser(Recipeid:string, Userid:string):Observable<Review>
  {
    var url;
    url  = this.baseurl;
    const options = 
    { headers: new HttpHeaders().set('ReviewUserID', Userid).set('Reviewrecipeid',Recipeid),    
  };
    return this.http.get<Review>(url, options)  //.pipe(catchError(this.handleError));
  }

}
