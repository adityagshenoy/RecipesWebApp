import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Recipe } from 'src/app/Models/RecipeModel';
import { RecipesrvcService } from 'src/app/Services/recipesrvc.service';
import { UsersrvcService } from 'src/app/Services/usersrvc.service';

import { ImadeitpageComponent } from './imadeitpage.component';

describe('ImadeitpageComponent', () => {
  let component: ImadeitpageComponent;
  let fixture: ComponentFixture<ImadeitpageComponent>;
  const fakeActivatedRoute = {
    snapshot: { data: {  } }
  } as ActivatedRoute;

  beforeEach(waitForAsync(() => {
    
    let recipeServiceStub: Partial<RecipesrvcService>;
    recipeServiceStub = {
        findrecipebyUser(id:string)
        {
            var  recipetst = new Recipe();
            recipetst.title = "intestsuite";
            var  recipetst2 = new Recipe();
            recipetst2.title = "intestsuite2";
            var lstreviews = [] as Recipe[];
            lstreviews.push(recipetst)
            lstreviews.push(recipetst2)
            return new Observable<any>(observer => {
                observer.next(lstreviews);
        });        
        }
    };
    TestBed.configureTestingModule({
      declarations: [ ImadeitpageComponent ],
      providers: [ { provide: RecipesrvcService, useValue: recipeServiceStub },
        {provide:ActivatedRoute, useValue:{parent:{snapshot:{params:{id:1}}}}},
         ]      
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImadeitpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
