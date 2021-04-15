import { Component, OnInit } from '@angular/core';
import { UsersrvcService } from 'src/app/Services/usersrvc.service';
import { ActivatedRoute, UrlSegment } from '@angular/router';
import { User } from 'src/app/Models/RecipeModel';

@Component({
  selector: 'app-my-personal-recipespage',
  templateUrl: './my-personal-recipespage.component.html',
  styleUrls: ['./my-personal-recipespage.component.css']
})
export class MyPersonalRecipespageComponent implements OnInit {

  id:string;
  constructor(private _usrvc:UsersrvcService, private route:ActivatedRoute) { 
  }

  userfor:User = new User();

  ngOnInit(): void {
 this.id = this.route.parent.snapshot.params["id"];
  }
  

}
