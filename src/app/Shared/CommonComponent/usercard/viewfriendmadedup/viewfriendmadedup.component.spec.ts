import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Recipe } from 'src/app/Models/RecipeModel';
import { RecipesrvcService } from 'src/app/Services/recipesrvc.service';

import { ViewfriendmadedupComponent } from './viewfriendmadedup.component';

describe('ViewfriendmadedupComponent', () => {
  let component: ViewfriendmadedupComponent;
  let fixture: ComponentFixture<ViewfriendmadedupComponent>;
  var mockrecipesid = {UserID : "2"}
  let recipeServiceStub: Partial<RecipesrvcService>;
  recipeServiceStub = {
    findrecipebyUser(id:string)
      {
        var  recipetst = new Recipe();
        recipetst.title = "intestsuite";
        var  recipetst2 = new Recipe();
        recipetst2.title = "intestsuite2";
        var lstrecipes = [] as Recipe[];
        lstrecipes.push(recipetst)
        lstrecipes.push(recipetst2)
        return new Observable<Recipe[]>(observer => {
            observer.next(lstrecipes);
      });        
      }
  };
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewfriendmadedupComponent ],
      providers:[ {provide:RecipesrvcService, useValue:recipeServiceStub},
        {provide:MAT_DIALOG_DATA, useValue:mockrecipesid},            
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewfriendmadedupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
