import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Recipe } from 'src/app/Models/RecipeModel';
import { RecipesrvcService } from 'src/app/Services/recipesrvc.service';

import { ViewfriendrecipesComponent } from './viewfriendrecipes.component';

describe('ViewfriendrecipesComponent', () => {
  let component: ViewfriendrecipesComponent;
  let fixture: ComponentFixture<ViewfriendrecipesComponent>;

  beforeEach(waitForAsync(() => {
    let recipeServiceStub: Partial<RecipesrvcService>;
    recipeServiceStub = {
        findrecipe(id:string)
        {
            var  recipetst = new Recipe();
            recipetst.title = "intestsuite";                        
            return new Observable<Recipe>(observer => {
                observer.next(recipetst);
        });        
        }
    };
   var mockrecipesid = {recipesid : ["11","22"]}
    TestBed.configureTestingModule({
      declarations: [ ViewfriendrecipesComponent ],
      providers:[ {provide:RecipesrvcService, useValue:recipeServiceStub},
        {provide:MAT_DIALOG_DATA, useValue:mockrecipesid},            
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewfriendrecipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
