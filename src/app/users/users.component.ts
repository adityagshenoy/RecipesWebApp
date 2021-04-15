import { Component, OnInit } from '@angular/core';
import { UsersrvcService } from '../Services/usersrvc.service';
import { Router, Route, ActivatedRoute } from '@angular/router';
import { User } from '../Models/RecipeModel';
import {MatTabsModule} from '@angular/material/tabs';
import { Observable, Subscription } from 'rxjs';

// #docregion class usersComponent
//component for landing page once the User logs in.

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  currentNavItem ="test"
  observablefetchUser:Observable<User>;
  constructor(private _usrvc:UsersrvcService, private route:ActivatedRoute) {
   }

id:string;
userfor:User;
  ngOnInit(): void {
    this.userfor = new User();
    this.id = this.route.snapshot.params["id"];
     this._usrvc.getUser(this.id).subscribe(fetcheduser => {this.userfor = fetcheduser})
     
  }
}


// #enddocregion class