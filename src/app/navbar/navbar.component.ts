import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import {Route,} from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { LoggedinemitService } from '../Services/loggedinemit.service';
import { LoggedInGaurd } from '../users/Gaurds/LoggedIn';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import { MatDialog} from '@angular/material/dialog';
import { SearchDialogueboxComponent } from './search-dialoguebox/search-dialoguebox.component';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit,OnDestroy {

  @ViewChild('inputsearch') inputsearchtext:string;

  isLoggedin:Boolean;
  test:string
  searchtext:string;
  UserID:string;//get from sessions
  Userfirstname:string;
  Userlastname:string;
  subscription:Subscription
  constructor(private loggedinsrvc:LoggedinemitService, public dialog: MatDialog) { 
    
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
////checks the session state. If Logged in session state will have value. to check whether the user is logged in and to get corrosponding details
  ngOnInit(): void {
    
  this.subscription =  this.loggedinsrvc.emitloggedingaurd().subscribe(tmp => {this.isLoggedin=tmp;
      this.UserID = sessionStorage.getItem("UserID")
      this.Userfirstname = sessionStorage.getItem("Firstname")
      this.Userlastname = sessionStorage.getItem("Lastname")});
  }

  searchDialog()
  {
    this.dialog.open(SearchDialogueboxComponent);
  }
  

}


