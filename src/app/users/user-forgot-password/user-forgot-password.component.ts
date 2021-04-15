import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Models/RecipeModel';

@Component({
  selector: 'app-user-forgot-password',
  templateUrl: './user-forgot-password.component.html',
  styleUrls: ['./user-forgot-password.component.css']
})
export class UserForgotPasswordComponent implements OnInit {

  constructor() { }

  usermodel:User = new User();

  ngOnInit(): void {

    this.usermodel.EmailId = "tetet"
  }

  onSubmit()
  {
    
  }

}
