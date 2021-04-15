import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { User } from 'src/app/Models/RecipeModel';
import { UsersrvcService } from 'src/app/Services/usersrvc.service';

@Component({
  selector: 'app-allauthors',
  templateUrl: './allauthors.component.html',
  styleUrls: ['./allauthors.component.css']
})
export class AllauthorsComponent implements OnInit,OnDestroy {
  authors_observable:Observable<User[]>;
authors:User[];
  subscription: Subscription;
  constructor(private _usersrvc:UsersrvcService) { }
  

  ngOnInit(): void {

    this.subscription =  this._usersrvc.getAuthors().subscribe(authorsfetched => {this.authors = authorsfetched;});

  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
