import { ChangeDetectorRef, Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Recipe } from 'src/app/Models/RecipeModel';

import { ScrollingRecipeCardComponent } from './scrolling-recipe-card.component';

describe('ScrollingRecipeCardComponent', () => {
  
  let component: ScrollingRecipeCardComponent;
  let fixture: ComponentFixture<ScrollingRecipeCardComponent>;
  


  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScrollingRecipeCardComponent,  ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollingRecipeCardComponent);
    component = fixture.componentInstance;
    var recipe = new Recipe();
    recipe.title = "In test suite";
    recipe.summary = "In test suite summary";
    recipe.creditsText = "In test suite creditstext";    
    component.recipeCard = recipe;
    fixture.detectChanges();
    component.ngOnInit();
    fixture.detectChanges();
    
    
  });

  it('should create', () => {
  
    expect(component).toBeTruthy();
  });


  // it('should mathc title of recipe which is mocked by the test')
  // {
  //   // var recipetest = new Recipe();
  //   // recipetest.title = "In test suite";
  //   // recipetest.summary = "In test suite summary test";
  //   // recipetest.creditsText = "In test suite creditstext";
    
  //   // component.recipeCard = recipetest;
    
    
  // expect(component.recipeCard.title).toBe("In test suite");
  // //  expect(fixture.debugElement.query(By.css('h2')).nativeElement.innerHTML).toBe("InTestsuite")
  // }
});




