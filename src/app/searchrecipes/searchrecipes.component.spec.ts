import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Recipe } from '../Models/RecipeModel';
import { RecipesrvcService } from '../Services/recipesrvc.service';

import { SearchrecipesComponent } from './searchrecipes.component';

describe('SearchrecipesComponent', () => {
  let component: SearchrecipesComponent;
  let fixture: ComponentFixture<SearchrecipesComponent>;
  var servicespy :RecipesrvcService;

  let recipeServiceStub: Partial<RecipesrvcService>;
  var recipetestarrout =  [] as any;
  var recipetestarr:Recipe[] = [] as any;
  var recipetest:Recipe
  recipetest = new Recipe();
  recipetest.title = "Intestsuite";
  recipetest.summary = "intestsummary";
  recipetestarr.push(recipetest);
  var recipetest2:Recipe
  recipetest2 = new Recipe();
  recipetest2.title = "Intestsuite22";
  recipetest2.summary = "intestsummary22";
  recipetestarr.push(recipetest2);
  recipetestarrout.push(recipetestarr)

  beforeEach(waitForAsync(() => {
  
    
    

    recipeServiceStub = {
        searchrecipe(seacrhtext:string)
        {
            return new Observable<any>(observer => {
                observer.next(recipetestarrout);
        })
        }
    };
    TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
      declarations: [ SearchrecipesComponent ],
      providers:[{provide:ActivatedRoute, useValue: {params: 
                                                                new Observable<any>(observer => {
                                                                  observer.next({id:"Chicken"});})
   }},///observable of the params
      { provide: RecipesrvcService, useValue: recipeServiceStub } ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
      var handlerspmock : HttpHandler;
     var httpmockservce = new HttpClient(handlerspmock);
    servicespy = new RecipesrvcService(httpmockservce);
    fixture = TestBed.createComponent(SearchrecipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

 

  it('should return the recipe object, the recipe search text hardcoded in the Activated route using Spies', () => {
    // component.finaloutputsearch = [] as any;
     component.ngOnInit();          
     expect(component.finaloutputsearch[0].title).toBe("Intestsuite");
  // expect(component).toBeTruthy();
 });

 it('using spies should return the recipe object, the recipe search text hardcoded in the Activated route using Spies', () => {
    // component.finaloutputsearch = [] as any;
    const spy = spyOn(servicespy, 'searchrecipe').and.returnValue( new Observable<any>(observer => {
        observer.next(recipetestarrout);
}));
     component.ngOnInit();
     expect(component.finaloutputsearch[0].title).toBe("Intestsuite");
  // expect(component).toBeTruthy();
 });

});
