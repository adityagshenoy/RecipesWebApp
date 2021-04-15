import { Component, OnInit } from '@angular/core';
import { UsersrvcService } from 'src/app/Services/usersrvc.service';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/Models/RecipeModel';

@Component({
  selector: 'app-my-photospage',
  templateUrl: './my-photospage.component.html',
  styleUrls: ['./my-photospage.component.css']
})
export class MyPhotospageComponent implements OnInit {

  id:string;
  constructor(private _usrvc:UsersrvcService, private route:ActivatedRoute) { 
  }

  userfor:User = new User();

  ngOnInit(): void {
 this.id = this.route.snapshot['_urlSegment']['segments'][1]['path'];
    
    this._usrvc.getUser(this.id).subscribe(temp => {this.userfor = temp;});

  }

}
