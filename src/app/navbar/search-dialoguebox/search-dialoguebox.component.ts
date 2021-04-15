import { Component, OnInit } from '@angular/core';
import { MatDialogRef,MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-search-dialoguebox',
  templateUrl: './search-dialoguebox.component.html',
  styleUrls: ['./search-dialoguebox.component.css']
})
export class SearchDialogueboxComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<SearchDialogueboxComponent>) { }

  ngOnInit(): void {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

}
