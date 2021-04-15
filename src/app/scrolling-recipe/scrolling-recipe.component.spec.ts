import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';
import { Recipe } from '../Models/RecipeModel';
import { RecipesrvcService } from '../Services/recipesrvc.service';

import { ScrollingRecipeComponent } from './scrolling-recipe.component';

describe('ScrollingRecipeComponent', () => {
  let component: ScrollingRecipeComponent;
  let fixture: ComponentFixture<ScrollingRecipeComponent>;

  let recipeServiceStub: Partial<RecipesrvcService>;
  recipeServiceStub = {
    findrecipeall(pagesize, pagenum)
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

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrollingRecipeComponent ],
      providers: [   { provide: RecipesrvcService, useValue: recipeServiceStub } ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollingRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
