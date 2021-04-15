import { Component, Input, OnInit } from '@angular/core';
import { Review } from 'src/app/Models/RecipeModel';
import {MatCardModule} from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { EditReviewdialogComponent } from '../edit-reviewdialog/edit-reviewdialog.component';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';



@Component({
  selector: 'app-reviewcard',
  templateUrl: './reviewcard.component.html',
  styleUrls: ['./reviewcard.component.css']
})
export class ReviewcardComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  @Input() review: Review;

  ngOnInit(): void {
    this.review
  }

  openRevieweditDialog() {
    this.dialog.open(EditReviewdialogComponent, {
      
        data: {
          review: this.review
        }
      
      
    });
  }


}
