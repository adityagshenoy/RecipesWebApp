import { Component, OnInit } from '@angular/core';
import { UsersrvcService } from 'src/app/Services/usersrvc.service';
import { ActivatedRoute } from '@angular/router';
import { Review, User } from 'src/app/Models/RecipeModel';
import { ReviewSrvcService } from 'src/app/Services/review-srvc.service';
import { EditReviewdialogComponent } from './edit-reviewdialog/edit-reviewdialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-my-reviewspage',
  templateUrl: './my-reviewspage.component.html',
  styleUrls: ['./my-reviewspage.component.css']
})
export class MyReviewspageComponent implements OnInit {

  id:string;
  constructor(private _usrvc:UsersrvcService, private route:ActivatedRoute, private reviewsrvc:ReviewSrvcService,
    public dialog: MatDialog) {
  }

  userfor:User = new User();
  reviews:Review[] = [] as any;
  userthis:User;
   reviewbyothers:Review[] = [] as any;
  // review2:Review;
  // review3:Review;

  ngOnInit(): void {
 
 this.id = this.route.parent.snapshot.params["id"];

    this.reviewsrvc.findReviewbyuser(this.id).subscribe(tmpreview1 => {this.reviews = tmpreview1;})
    var submittedrecipes
    this._usrvc.getUser(this.id).subscribe(tmpusr => {this.userthis =tmpusr;
                                                  submittedrecipes = this.userthis.SubmittedRecipes;
                                                  submittedrecipes.forEach(element => {
                                                    this.reviewsrvc.findReviewbyrecipe(element).subscribe(tmpreview1 => {this.reviewbyothers = tmpreview1;})
                                           })

});
  


  }

  

}
