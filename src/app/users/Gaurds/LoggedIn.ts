import { CanActivate,RouterStateSnapshot ,ActivatedRouteSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs';
import { UsersrvcService } from 'src/app/Services/usersrvc.service';
import { User } from 'src/app/Models/RecipeModel';
import { Injectable } from '@angular/core';

@Injectable(

    {
        providedIn:'root'
    }
)

export class LoggedInGaurd implements CanActivate {

    constructor(private _usrvc:UsersrvcService, private _router:Router) { }
//check this after commenting the @ Injectible decoraters


    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        
        if ( sessionStorage.getItem('isLoggedin'))
        {
            return true;
        }
        else{
            alert("Not Logged in")
            this._router.navigate(['userlogin'])
            return false;
        }
        
    }


  
   
}