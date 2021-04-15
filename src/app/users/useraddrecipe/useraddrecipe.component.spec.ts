import { ComponentFactoryResolver } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { ActivatedRoute, provideRoutes } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/Models/RecipeModel';
import { RecipesrvcService } from 'src/app/Services/recipesrvc.service';
import { UsersrvcService } from 'src/app/Services/usersrvc.service';

import { UseraddrecipeComponent } from './useraddrecipe.component';

describe('UseraddrecipeComponent', () => {
  let component: UseraddrecipeComponent;
  let fixture: ComponentFixture<UseraddrecipeComponent>;

 

  beforeEach(waitForAsync(() => {
    let userServiceStub: Partial<UsersrvcService>;
    userServiceStub = {
        getUser(id:string)
        {
            var  usertst = new User();
            usertst.Firstname = "intestsuite";

            return new Observable<any>(observer => {
                observer.next(usertst);
        });
    }
    }
    let recipeServiceStub: Partial<RecipesrvcService>;
    recipeServiceStub = {
    };
    TestBed.configureTestingModule({
      declarations: [ UseraddrecipeComponent ],
      providers:[  FormBuilder,{provide:ActivatedRoute, useValue:{parent:{snapshot:{params:{id:1}}}}},
        { provide: UsersrvcService, useValue: userServiceStub },
        { provide: RecipesrvcService, useValue: recipeServiceStub }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UseraddrecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    //expect(component).toBeTruthy();

  // var buttonelem = fixture.debugElement.query(By.css('button')).nativeElement;
  // buttonelem.click();

   expect(fixture.debugElement.query(By.css('.ingredientcomponent')))
    


  });
});
