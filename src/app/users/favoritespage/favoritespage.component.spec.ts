import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Review, User } from 'src/app/Models/RecipeModel';
import { RecipesrvcService } from 'src/app/Services/recipesrvc.service';
import { UsersrvcService } from 'src/app/Services/usersrvc.service';

import { FavoritespageComponent } from './favoritespage.component';

describe('FavoritespageComponent', () => {
  let component: FavoritespageComponent;
  let fixture: ComponentFixture<FavoritespageComponent>;

  beforeEach(waitForAsync(() => {
    let userServiceStub: Partial<UsersrvcService>;

    userServiceStub = {
        getUser(id:string)
        {
            var  usertst = new User();
            usertst.Firstname = "intestsuite";
            usertst.FavRecipesId = [] as any;
            usertst.FavRecipesId.push("13");
            usertst.FavRecipesId.push("2");
            return new Observable<any>(observer => {
                observer.next(usertst);
        });
         }
    }
    
    let recipeServiceStub: Partial<RecipesrvcService>;
    recipeServiceStub = {
        findrecipe(favrecipeid:string)
        {
            var  reviewtst2 = new Review();
            reviewtst2.ReviewText = "intestsuite2recipe";                                
            return new Observable<any>(observer => {
                observer.next(reviewtst2);
        });
        }   
        }   

    TestBed.configureTestingModule({
      declarations: [ FavoritespageComponent ],
      providers: [
        { provide: UsersrvcService, useValue: userServiceStub },
        {provide:ActivatedRoute, useValue:{parent:{snapshot:{params:{id:1}}}}},
        { provide: RecipesrvcService, useValue: recipeServiceStub }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritespageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
