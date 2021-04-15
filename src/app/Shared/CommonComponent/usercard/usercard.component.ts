import { Component, Input, OnInit } from '@angular/core';
import { Review, User } from 'src/app/Models/RecipeModel';
import {MatCardModule} from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
//import { EditReviewdialogComponent } from '../edit-reviewdialog/edit-reviewdialog.component';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { ViewfriendrecipesComponent } from './viewfriendrecipes/viewfriendrecipes.component';
//import { ImadeitpageComponent } from '../imadeitpage/imadeitpage.component';
import { ViewfriendmadedupComponent } from './viewfriendmadedup/viewfriendmadedup.component';


@Component({
  selector: 'app-usercard',
  templateUrl: './usercard.component.html',
  styleUrls: ['./usercard.component.css']
})
export class UsercardComponent implements OnInit {

  constructor(public dialog: MatDialog) { }
  @Input() user:User;

  ngOnInit(): void {
  
  }

  displaymaderecipes()
  {
    this.dialog.open(ViewfriendmadedupComponent, {
        
      data: {
        UserID: this.user.UserID,
      }
    
    
  });
}
  
  displaylikedrecipes()
  {
    
      this.dialog.open(ViewfriendrecipesComponent, {
        
          data: {
            recipesid: this.user.FavRecipesId,
          }
        
        
      });
    }
  

}
