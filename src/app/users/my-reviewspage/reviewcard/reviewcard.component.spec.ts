import { OverlayModule } from '@angular/cdk/overlay';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { Review } from 'src/app/Models/RecipeModel';

import { ReviewcardComponent } from './reviewcard.component';




describe('ReviewcardComponent', () => {
  let component: ReviewcardComponent;
  let fixture: ComponentFixture<ReviewcardComponent>;

  
  let matdialogStub: Partial<MatDialog>;
  matdialogStub = {
    
  }
  let OverlayModulestub: Partial<OverlayModule>;
  OverlayModulestub = {
    
  }
 var review:Review;
 review = new Review();

  beforeEach(waitForAsync(() => {
    
    
    TestBed.configureTestingModule({
      declarations: [ ReviewcardComponent ],
      providers:[{provide:MatDialog, useValue:matdialogStub}, {provide:OverlayModule, useValue:OverlayModulestub}]
    })
    .compileComponents();
    
   
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewcardComponent);
    component = fixture.componentInstance;
    component.review = new Review();
    component.review.ReviewRating = "78";
    component.review.ReviewRecipename = "test";

        var spy = spyOn(component, 'openRevieweditDialog').and.returnValue();

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
