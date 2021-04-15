import { Component, OnDestroy, OnInit } from '@angular/core';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { Subscription } from 'rxjs';
import { LoaderServiceService } from 'src/app/Services/loader-service.service';

@Component({
  selector: 'app-progress-spinner',
  templateUrl: './progress-spinner.component.html',
  styleUrls: ['./progress-spinner.component.css']
})
export class ProgressSpinnerComponent implements OnInit,OnDestroy {

  constructor(private loadsrvc:LoaderServiceService) { }
  subscription:Subscription;
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  isLoadingP:boolean
  ngOnInit(): void {
    this.subscription = this.loadsrvc.isLoading.subscribe(temp => this.isLoadingP=temp);    
  }

}
