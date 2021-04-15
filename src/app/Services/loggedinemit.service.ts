import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoggedInGaurd } from '../users/Gaurds/LoggedIn';

@Injectable({
  providedIn: 'root'
})
export class LoggedinemitService {

  constructor() { }
  loggedinflag:boolean=false;

  setloginsession( userId:string, firstname:string, lastname:string){
  sessionStorage.setItem("UserID", String(userId) );
  sessionStorage.setItem("Firstname", String(firstname) );
  sessionStorage.setItem("Lastname", String(lastname) );
  }

  setloginsessionflag(flag:boolean)
  {
    sessionStorage.setItem("isLoggedin", String(flag));         
  }
  emitloggedingaurd()
  {
    return new Observable<boolean>((observer) => {setInterval(()=> 
      {      
        
        if ( sessionStorage.getItem('isLoggedin')=="true")
        {
            this.loggedinflag= true;
            observer.next(this.loggedinflag)
        }
        else if(!(sessionStorage.getItem('isLoggedin')=="false")){
          this.loggedinflag= false;
          observer.next(this.loggedinflag)
        }  
        else {
          this.loggedinflag= false;
          observer.next(this.loggedinflag)
        }
     ;
          },100)})
  }
        
}

