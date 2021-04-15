import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import {mergeMap, flatMap, map, tap, catchError} from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpEvent, HttpResponse } from '@angular/common/http';
import { Review, User } from '../Models/RecipeModel';
import { UsersModule } from '../users/users.module';
import { error } from '@angular/compiler/src/util';
import { resolve } from 'dns';
import { AlertCommonComponent } from '../Shared/CommonComponent/alert-common/alert-common.component';
import {} from './Interceptortest';
import { MatDialog } from '@angular/material/dialog';


@Injectable({
  providedIn: 'root'
})
export class UsersrvcService {
  

  
  constructor(private http:HttpClient) { }

  baseurl = "https://ionian-cheerful-tomato.glitch.me/users";
  //baseurl = "http://localhost:3000/users";

login(username:string, password:string):Observable<boolean>
{

  const usmol =new User();
  usmol.EmailId = username;
  usmol.Password = password;
  var haders = new HttpHeaders() ;
  const options = 
  { headers: new HttpHeaders().set('emailid', usmol.EmailId).set('password', usmol.Password),
  
};
  
  var url = this.baseurl + "/login";
  return   this.http.get<boolean>(url, options);
}


getnextUserID()
{
  var url = "https://ionian-cheerful-tomato.glitch.me/custom/getUserID";
  let promise = new Promise((resolve, reject) => {
  this.http.get(url).toPromise().then(
    res =>{resolve(res),
    err => {throwError("Some Error occured")}
  }
  )
}
  );
  return promise
}
// getreviews(UserID:string):Observable<Review>
// {
//   var url;
//   url  = this.baseurl + "/recipe"+ UserID;
// }

/////fetch all authors

getAuthors():Observable<User[]>
{
  var url;
  url  = this.baseurl + "/authors";
  return this.http.get<User[]>(url)//.pipe(catchError(this.handleError));
}



getUser(UserID:string):Observable<User>
{
  var url;
  url  = this.baseurl + "/"+ UserID;
  return this.http.get<User>(url)//.pipe(catchError(this.handleError));
}


getUserbyEMail(email:string):Observable<User>
{
  
  var url;
  url  = this.baseurl + "/getbyemail/"+ email;
  return this.http.get<User>(url)//.pipe(catchError(this.handleError));
}

addoneUser(user:User):Observable<any>
{
  var cdresp;
  var response: Observable<any>;
    return this.http.post<any>(this.baseurl, user)
    //. 
    // pipe(
    //   map((res: any) => {
    //     console.log("inside map")
    //     console.log(res);
        
    //     if (res.status==201) {    
    //       console.log("inside201")      
    //       return res;
    //     }
    //     else{
    //      // throw this.handleError;
    //     }
    //     return res.response;
    //   }),
    //  catchError(this.handleError));
}

EditUser(user:User):Observable<any>
{
      return this.http.put<any>(this.baseurl, user)
    // .pipe(
    //  catchError(this.handleError));
}


addFriend(UserID:string, friendUserID:string):Observable<any>
{
  var url;
  url  = this.baseurl + "/addfriend";
  return this.http.get<User>(url)
}



}
