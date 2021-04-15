import { Component, Inject, Input, OnInit } from '@angular/core';

import { Review } from 'src/app/Models/RecipeModel';
import {MatDialogModule} from '@angular/material/dialog';

import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';

import {MatInputModule} from '@angular/material/input';

@Component({
  selector: 'app-edit-reviewdialog',
  templateUrl: './edit-reviewdialog.component.html',
  styleUrls: ['./edit-reviewdialog.component.css']
})
export class EditReviewdialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: Review) { }

  

  ngOnInit(): void {
  }

}
