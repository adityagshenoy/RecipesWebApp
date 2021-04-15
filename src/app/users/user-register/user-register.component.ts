import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, ValidatorFn, AbstractControl } from '@angular/forms';
import {IUser, User} from './../../Models/RecipeModel';
import { UsersrvcService } from 'src/app/Services/usersrvc.service';

import { Router } from '@angular/router';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { MatDialog } from '@angular/material/dialog';
import { AlertCommonComponent } from 'src/app/Shared/CommonComponent/alert-common/alert-common.component';



@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  
  retobj:any;

  constructor(private formBuilder: FormBuilder, private _usrvc:UsersrvcService, private route:Router,public dialog: MatDialog)
  {

  }

  useradd:User;
  usertemp:User;
  registerForm :FormGroup

  profileForm : FormGroup;
  submitted = false;
  varany:User;
  ngOnInit()
  {
    
      this.registerForm = this.formBuilder.group({
          title: ['', Validators.required], 
          firstName: ['', Validators.required],
          lastName: ['', Validators.required],
          email: ['', [Validators.required, Validators.email]],
          confirmemail: ['', [Validators.required, Validators.email]],
          password: ['', [Validators.required, Validators.minLength(6)]],
          confirmPassword: ['', Validators.required],
          gender:['', [Validators.required, this.Gendervalidator()]],
          City:['', Validators.required],
          acceptTerms: [false, Validators.requiredTrue]
      }, {
          validator: [this.MustMatch('email', 'confirmemail'), this.MustMatch('password', 'confirmPassword')]
      });
  }
  get f() { return this.registerForm.controls; }
  
  onSubmit() {
    // TODO: Use EventEmitter with form value
    
    this.useradd = new User();
    this.useradd.Firstname =  this.registerForm.value["firstName"];
    this.useradd.Lastname =  this.registerForm.value["lastName"];
this.useradd.Password = this.registerForm.value["password"];
this.useradd.EmailId = this.registerForm.value["email"];
this.useradd.Gender = this.registerForm.value["gender"];
this.useradd.City = this.registerForm.value["City"];

this.useradd.SocialMediaHandles ={
  "Pinterest":"",
  "Facebook":"",
  "Twitter":"",
  "Personal Blog":"",
};

this.useradd.Notifications = [];
this.useradd.ProfileUrl = "";
this.useradd.Aboutyou = "";
this.useradd.Wishlist = [];
this.useradd.Friends = [] as any;
this.useradd.FavRecipesId = [] as any;


this._usrvc.getnextUserID().then((val)=>{       
    this.useradd.UserID = Number(val)+1;     
    this._usrvc.addoneUser(this.useradd).subscribe(response => {this.retobj=response;      
      this.usertemp= response;
      this.dialog.open(AlertCommonComponent, {        
        data: {
          "title":"Successful",
          "message":"User successfully registered. Go to Sign in page to login."
        }                  
    });
    this.onReset();
    },
    error => {      
      if(error.status==424){
        this.dialog.open(AlertCommonComponent, {        
          data: {
            "title":"Duplicate Email found.",
            "message":"The EMail Id is already registered with another User. Please check it"
          }                  
      });
      this.registerForm.value["email"] = "";
    }
      else{
        this.dialog.open(AlertCommonComponent, {    
        data: {
          "title":"Some Error occured",
          "message":"Please try again"
        }
      });
    }}
    );    
  }
    );

    }
  onReset() {
    this.submitted = false;
    this.registerForm.reset();
}

   MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];

        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            // return if another validator has already found an error on the matchingControl
            return;
        }

        // set error on matchingControl if validation fails
        if (control.value !== matchingControl.value) {
          console.log(control)
          console.log(matchingControl)
            matchingControl.setErrors({ mustMatch: true });
        } else {
            matchingControl.setErrors(null);
        }
    }
}

Gendervalidator():ValidatorFn
{
  return (control: AbstractControl): {[key: string]: any} | null => {
    if(control.value =="Male" || control.value =="Female" || control.value =="Female")
    {
    return null;
    }
    else{
      return {'validGender': {value: control.value}};
    }
  };
}

}