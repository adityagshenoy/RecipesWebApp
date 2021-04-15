import { async, ComponentFixture, TestBed ,fakeAsync, tick, } from '@angular/core/testing';

import { Scrollingrecipedata} from './ScrollingRecipeData';
import { RecipeDataService } from '../Services/recipe-data.service';
import { HttpClientModule, HttpClient, HttpHandler } from '@angular/common/http';
import {TempRECIPES} from './../Services/TempRecipearray';
import {IRecipe, Recipe} from './../Models/RecipeModel';
import { Injectable } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Observable, partition } from 'rxjs';
import { RecipesrvcService } from '../Services/recipesrvc.service';




@Injectable({
  providedIn: 'root'
})
class MockRDService extends RecipeDataService{
 recipesnew:IRecipe[] = TempRECIPES['recipes'];

};


describe('ScrollingDataComponent', () => {

  let component: Scrollingrecipedata;
  let fixture: ComponentFixture<Scrollingrecipedata>;

  let httphandlerstub: Partial<HttpHandler>;

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

  beforeEach(() => {
    TestBed.configureTestingModule({
      // provide the component-under-test and dependent service
      imports: [
        HttpClientTestingModule
    ]
,    
      providers: [                
        { provide: MockRDService, useClass: MockRDService },  
        { provide: RecipesrvcService, useValue: recipeServiceStub }              
      ]
    });    
    fixture = TestBed.createComponent(Scrollingrecipedata);
        component = fixture.componentInstance;
        fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return a data service of recipes of 10 elements', fakeAsync(() => {

    
   // component.ngOnInit();
    
    var outputpropcheck;
    component.randomrecipesprop.subscribe(varbg => outputpropcheck = varbg );
    component.randomrecipes(0);
    
    tick();
    fixture.detectChanges();
    expect(outputpropcheck[0].title).toBe("intestsuite")
    
  }));

});
