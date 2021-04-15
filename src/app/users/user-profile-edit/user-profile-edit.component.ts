import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import { userInfo } from 'os';
import { IUser, User } from 'src/app/Models/RecipeModel';
import { UsersrvcService } from 'src/app/Services/usersrvc.service';
import { ActivatedRoute } from '@angular/router';
import { concatAll } from 'rxjs/operators';
import { error } from 'protractor';
import { AlertCommonComponent } from 'src/app/Shared/CommonComponent/alert-common/alert-common.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-user-profile-edit',
  templateUrl: './user-profile-edit.component.html',
  styleUrls: ['./user-profile-edit.component.css']
})
export class UserProfileEditComponent implements OnInit {

  constructor(private fb: FormBuilder,private _usrvc:UsersrvcService, private route:ActivatedRoute, public dialog: MatDialog) { }

profileeditform:FormGroup;
socialmediahandles:FormGroup;
useredit:IUser;
id:string;
  userfor:User = new User();


  ngOnInit(): void {    
   
 
    this.profileeditform = this.fb.group(
        {      
            firstname:new FormControl('',Validators.required),
            lastname:new FormControl('',Validators.required),
            email:new FormControl('',[Validators.required, Validators.email]),
            city:new FormControl('',[Validators.required]),
            gender:new FormControl('',[Validators.required]),
            profileUrl:new FormControl(''),
            aboutyou:new FormControl('')
            
        },
        this.socialmediahandles = this.fb.group(
        {
            pinterest:new FormControl(''),
            facebook:new FormControl(''),
            twitter:new FormControl(''),
            personalblog:new FormControl(''),
        }
        )
    )


    
    this.id = String(this.route.snapshot.params['id']);
   
    this._usrvc.getUser(this.id).subscribe(temp => {this.userfor = temp;      
     this.profileeditform.controls['firstname'].setValue(this.userfor.Firstname);
     this.profileeditform.controls['lastname'].setValue(this.userfor.Lastname);
     this.profileeditform.controls['email'].setValue(this.userfor.EmailId);
     this.profileeditform.controls['city'].setValue(this.userfor.City);
     this.profileeditform.controls['gender'].setValue(this.userfor.Gender);
     this.profileeditform.controls['profileUrl'].setValue(this.userfor.ProfileUrl);
     this.profileeditform.controls['aboutyou'].setValue(this.userfor.Aboutyou);
     this.socialmediahandles.controls['pinterest'].setValue(this.userfor.SocialMediaHandles['pinterest']);
     this.socialmediahandles.controls['facebook'].setValue(this.userfor.SocialMediaHandles['facebook']);
     this.socialmediahandles.controls['twitter'].setValue(this.userfor.SocialMediaHandles['twitter']);
     this.socialmediahandles.controls['personalblog'].setValue(this.userfor.SocialMediaHandles['personalblog']);     
   }
   );
    
  }
  get freg() { return this.profileeditform.controls; }
  get fsocm() { return this.socialmediahandles.controls; }

  onSubmit():void{

    this.useredit = new User();
    
    this.useredit.City = this.profileeditform.value['city']
    this.useredit.Firstname = this.profileeditform.value['firstname']
    this.useredit.Lastname = this.profileeditform.value['lastname']
    this.useredit.EmailId = this.profileeditform.value['email']
    this.useredit.Gender = this.profileeditform.value['gender']
    this.useredit.ProfileUrl = this.profileeditform.value['profileUrl']
    this.useredit.Aboutyou = this.profileeditform.value['aboutyou']

    this.useredit.SocialMediaHandles = { pinterest:this.socialmediahandles.value['pinterest'],
                                          twitter:this.socialmediahandles.value['twitter'],
                                          facebook:this.socialmediahandles.value['facebook'],
                                          personalblog:this.socialmediahandles.value['personalblog'],  }

    // this.socialmediahandles[1]= {"facebook":this.socialmediahandles.value['facebook']  }
    // this.socialmediahandles[2]= {"twitter":this.socialmediahandles.value['twitter']  }
    // this.socialmediahandles[3]= {"personalblog":this.socialmediahandles.value['personalblog']  }
var card;
this._usrvc.EditUser(this.useredit).subscribe(catem => {card = catem,
  this.dialog.open(AlertCommonComponent, {    
    data: {
      "title":"Success",
      "message":"Details were successfully saved"
    }
  });
},
  error => {this.dialog.open(AlertCommonComponent, {    
    data: {
      "title":"Some Error occured",
      "message":"Please try again"
    }
  });}
  );

    
  }




}
