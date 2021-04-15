import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Review } from 'src/app/Models/RecipeModel';
import { RecipesrvcService } from 'src/app/Services/recipesrvc.service';
import { ReviewSrvcService } from 'src/app/Services/review-srvc.service';

import { AddReviewdialogComponent } from './add-reviewdialog.component';

describe('AddReviewdialogComponent', () => {
  let component: AddReviewdialogComponent;
  let fixture: ComponentFixture<AddReviewdialogComponent>;

  beforeEach(async(() => {
        var reviewtest:Review;
        reviewtest = new Review();
        reviewtest.ReviewText  ="Intestsuiteaddreview";
    let reviewServiceStub: Partial<ReviewSrvcService>;
    reviewServiceStub = {
        addReview(review:Review)
        {
            return new Observable<any>(observer => {observer.next(reviewtest)});
        }
    };
    let myServiceMock: any;
    myServiceMock = {


    }
    TestBed.configureTestingModule({
      declarations: [ AddReviewdialogComponent ],
      providers:[
      {provide:ReviewSrvcService,useValue:reviewServiceStub},
      {provide: MAT_DIALOG_DATA, useValue: myServiceMock}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddReviewdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should adda review via the service and return a review object', () => {
    var reviewintestcase = new Review();
    reviewintestcase.ReviewText = "Intestsuiteaddreview";
    var  retobject :Review
    //retobject = component.addReview("4","Intestsuiteaddreview");
   // expect(retobject).toBe("Intestsuiteaddreview")
    
    //objetc which returns the added review in temp object so method not returning anything
    //object reuturn to a property for the purpose of testing?
    //expect(component).toBeTruthy();
  });

});
