import { Component, OnDestroy, OnInit } from '@angular/core';
import { User } from 'src/app/Models/RecipeModel';
import { UsersrvcService } from 'src/app/Services/usersrvc.service';
import { ActivatedRoute, ActivatedRouteSnapshot, UrlSegment } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import { Observable, Subscription } from 'rxjs';
import { coerceNumberProperty } from '@angular/cdk/coercion';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit,OnDestroy {

  id:string;
  urlsegs:Observable<UrlSegment[]>;
  userfetchsubscription:Subscription;
  userobservables:Observable<User>;
  constructor(private _usrvc:UsersrvcService, private route:ActivatedRoute) { 
  }
 
  userfor:User = new User();
  

  ngOnInit(): void {
    this.id = this.route.parent.snapshot.params["id"];
    this.userfetchsubscription = this._usrvc.getUser(this.id).subscribe(temp => {this.userfor = temp})                                            
  }

  ngOnDestroy(): void {
    this.userfetchsubscription.unsubscribe();
    
  }

}
