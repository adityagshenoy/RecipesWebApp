import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-alert-common',
  templateUrl: './alert-common.component.html',
  styleUrls: ['./alert-common.component.css']
})
export class AlertCommonComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }
title:string;
message:string
  ngOnInit(): void {

    this.title = this.data["title"];
    this.message = this.data["message"];
  }

}
