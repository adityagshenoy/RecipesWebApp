import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipesrvcService } from 'src/app/Services/recipesrvc.service';
import { UsersrvcService } from 'src/app/Services/usersrvc.service';

import { MyPersonalRecipespageComponent } from './my-personal-recipespage.component';

describe('MyPersonalRecipespageComponent', () => {
  let component: MyPersonalRecipespageComponent;
  let fixture: ComponentFixture<MyPersonalRecipespageComponent>;

  beforeEach(waitForAsync(() => {
    const fakeActivatedRoute = {
      snapshot: { data: {  } }
    } as ActivatedRoute;

    let userServiceStub: Partial<UsersrvcService>;
    userServiceStub = {
    };
    let recipeServiceStub: Partial<RecipesrvcService>;
    recipeServiceStub = {
    };
    TestBed.configureTestingModule({
      declarations: [ MyPersonalRecipespageComponent ],
      providers:[
        { provide: UsersrvcService, useValue: userServiceStub },
        { provide:Router, useValue: Router},{provide:ActivatedRoute, useValue:{parent:{snapshot:{params:{id:1}}}}}, 
     ]
      
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPersonalRecipespageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
