import { Component, OnInit, ViewContainerRef, ComponentFactoryResolver, ViewChild, ComponentFactory } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { UsersrvcService } from 'src/app/Services/usersrvc.service';
import { User } from 'src/app/Models/RecipeModel';
import { TooltipComponent } from 'src/app/tooltip/tooltip.component';
import { TooltipsrvcService } from 'src/app/tooltip/tooltipsrvc.service';

import { ParentcomptooltipComponent } from 'src/app/tooltip/parentcomptooltip/parentcomptooltip.component';
import {
  trigger,  state,  style,  animate,  transition,
  // ...
} from '@angular/animations';
import { error } from 'protractor';
import { AlertCommonComponent } from 'src/app/Shared/CommonComponent/alert-common/alert-common.component';
import { MatDialog } from '@angular/material/dialog';
import { LoggedinemitService } from 'src/app/Services/loggedinemit.service';
import { ButtontooltipcustDirective } from 'src/app/Shared/Directives/buttontooltipcust.directive';
import { MatFormField } from '@angular/material/form-field';




@Component({
  selector: 'app-user-sign-in',
  templateUrl: './user-sign-in.component.html',
  styleUrls: ['./user-sign-in.component.css'],
  animations: [
    // animation triggers go here
    trigger('openClose', [
    state('open', style({
      height: '200px',
      opacity: 1,
      backgroundColor: 'yellow'
    })),
    state('closed', style({
      height: '100px',
      opacity: 0.5,
      backgroundColor: 'green'
    })),
    transition('open => closed', [
      animate('1s')
    ]),
    transition('closed => open', [
      animate('0.5s')
    ]),
  ])
  ]
})
export class UserSignInComponent implements OnInit {
  data: string;
  interval: NodeJS.Timeout;
  componet: any;
  isOpen: boolean;
  hide = true;
  

  checked = false;
  indeterminate = false;

  constructor(private router:Router,private formBuilder: FormBuilder, private usrrsrvc:UsersrvcService, public dialog: MatDialog,
    private loggedinservice:LoggedinemitService
   ) { }

    //@ViewChild(ButtontooltipcustDirective, {static: true}) buttonHost: ButtontooltipcustDirective;
  signInForm:FormGroup;
  successlogin:boolean

  ngOnInit(): void {
    
    this.signInForm = this.formBuilder.group(
      {
        email:new FormControl('',[Validators.required, Validators.minLength(6),Validators.email]),
        password:new FormControl('',[Validators.required, Validators.minLength(8)])
      }
      
    )
  }
  get fsig() { return this.signInForm.controls; }

  onSUbmit()
  {
   var tempuser:User = new User();
   
   var email:string = this.signInForm.value["email"];
  
    this.usrrsrvc.login(this.signInForm.value["email"],this.signInForm.value["password"]).
    subscribe(login => {this.successlogin = login ;
      
      
      if(this.successlogin)
      { 
      this.loggedinservice.setloginsessionflag(true)       
      
      this.usrrsrvc.getUserbyEMail(email).subscribe(
          tem => {
            tempuser = tem;            
            this.loggedinservice.setloginsession(String(tempuser.UserID),String(tempuser.Firstname) ,String(tempuser.Lastname)  )            
            this.router.navigate(['/userpages', tempuser.UserID, 'aboutme',])
      });
    }
    else{
      this.dialog.open(AlertCommonComponent, {        
        data: {
          "title":"Invalid credentials.",
          "message":"Please check your login and Password"
        }                  
    });
    }
  },error=>{
    this.dialog.open(AlertCommonComponent, {        
      data: {
        "title":"Some Error occured",
        "message":"Try again" +error.message
      }                  
  });
  });
            
  }
}

