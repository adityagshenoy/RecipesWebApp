import { Component, Inject, OnDestroy, OnInit, ViewChild } from '@angular/core';
import {MatDialog, MatDialogModule, MAT_DIALOG_DATA} from '@angular/material/dialog';

import {MatInputModule} from '@angular/material/input';
import { error } from 'protractor';
import { Subscription } from 'rxjs';
import { Review } from 'src/app/Models/RecipeModel';
import { RecipesrvcService } from 'src/app/Services/recipesrvc.service';
import { ReviewSrvcService } from 'src/app/Services/review-srvc.service';

@Component({
  selector: 'app-add-reviewdialog',
  templateUrl: './add-reviewdialog.component.html',
  styleUrls: ['./add-reviewdialog.component.css']
})
export class AddReviewdialogComponent implements OnInit,OnDestroy {

  review:Review;
  subscription:Subscription;
  constructor(private reviewsrvc:ReviewSrvcService, @Inject(MAT_DIALOG_DATA) public data:any) { }
  ngOnDestroy(): void {
    
  }

  @ViewChild(MatDialog) testprop;

  ngOnInit(): void {
  }

  addReview(rating:string, reviewtext:string)
  {
    
   var title =this.data["recipename"];
   this.review = new Review();
   this.review.ReviewUserID = sessionStorage.getItem("UserID");
   this.review.Reviewrecipeid = this.data["recipeid"]
   this.review.ReviewRating = rating;
   this.review.ReviewText = reviewtext;
   this.review.ReviewRecipename = title;
   this.review.ReviewUsername = sessionStorage.getItem("Firstname") + sessionStorage.getItem("Lastname");
   
   var tmpreview
    this.subscription = this.reviewsrvc.addReview(this.review).subscribe(tvmp =>tmpreview=tvmp ,
      error => alert(error));
  }

  close()
  {
    
    
  }

}
