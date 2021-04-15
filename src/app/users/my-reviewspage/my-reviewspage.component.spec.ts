import { OverlayModule } from '@angular/cdk/overlay';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Review, User } from 'src/app/Models/RecipeModel';
import { RecipesrvcService } from 'src/app/Services/recipesrvc.service';
import { ReviewSrvcService } from 'src/app/Services/review-srvc.service';
import { UsersrvcService } from 'src/app/Services/usersrvc.service';

import { MyReviewspageComponent } from './my-reviewspage.component';

describe('MyReviewspageComponent', () => {
  let component: MyReviewspageComponent;
  let fixture: ComponentFixture<MyReviewspageComponent>;
  const fakeActivatedRoute = {
    snapshot: { data: {  } }
  } as ActivatedRoute;

  beforeEach(waitForAsync(() => {
    let userServiceStub: Partial<UsersrvcService>;
    userServiceStub = {
        getUser(id:string)
        {
            var  usertst = new User();
            usertst.Firstname = "intestsuite";
            usertst.SubmittedRecipes = [ ] as any;
            usertst.SubmittedRecipes.push("12");
            usertst.SubmittedRecipes.push("19");

            return new Observable<any>(observer => {
                observer.next(usertst);
        });
         }
    };

    let reviewServiceStub: Partial<ReviewSrvcService>;
    reviewServiceStub = {

        findReviewbyrecipe(element:string)
        {
            var  reviewtst = new Review();
            reviewtst.ReviewText = "intestsuite1recipe";
            var  reviewtst2 = new Review();
            reviewtst2.ReviewText = "intestsuite2recipe";
            var lstreviews = [] as Review[];
            lstreviews.push(reviewtst)
            lstreviews.push(reviewtst2)
            return new Observable<any>(observer => {
                observer.next(lstreviews);
        });

        }
,
        findReviewbyuser(userid:string){
            var  reviewtst = new Review();
            reviewtst.ReviewText = "intestsuite";
            var  reviewtst2 = new Review();
            reviewtst2.ReviewText = "intestsuite2";
            var lstreviews = [] as Review[];
            lstreviews.push(reviewtst)
            lstreviews.push(reviewtst2)
            return new Observable<any>(observer => {
                observer.next(lstreviews);
        });

        }
    };
    let OverlayModulestub: Partial<OverlayModule>;
    OverlayModulestub = {
    }
    let matdialogStub: Partial<MatDialog>;
    matdialogStub = {
      
    }
    
    TestBed.configureTestingModule({
      declarations: [ MyReviewspageComponent ],
      providers:[MatDialog, {provide:ActivatedRoute, useValue:{parent:{snapshot:{params:{id:1}}}}},
        { provide: UsersrvcService, useValue: userServiceStub },
        { provide: ReviewSrvcService, useValue: reviewServiceStub },
        {provide:MatDialog, useValue:matdialogStub},
        {provide:OverlayModule, useValue:OverlayModulestub},]
      
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyReviewspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
