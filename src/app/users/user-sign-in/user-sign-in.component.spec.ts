import { OverlayModule } from '@angular/cdk/overlay';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipesrvcService } from 'src/app/Services/recipesrvc.service';
import { UsersrvcService } from 'src/app/Services/usersrvc.service';

import { UserSignInComponent } from './user-sign-in.component';

describe('UserSignInComponent', () => {
  let component: UserSignInComponent;
  let fixture: ComponentFixture<UserSignInComponent>;

  beforeEach(waitForAsync(() => {
     
	  let userServiceStub: Partial<UsersrvcService>;
    userServiceStub = {
    };
    let OverlayModulestub: Partial<OverlayModule>;
    OverlayModulestub = {
    }
    let matdialogStub: Partial<MatDialog>;
    matdialogStub = {
      
    }

    TestBed.configureTestingModule({
      declarations: [ UserSignInComponent ],
      providers:[ 
        { provide: UsersrvcService, useValue: userServiceStub },
           { provide:Router, useValue: Router}, FormBuilder, MatDialog,
           {provide:MatDialog, useValue:matdialogStub},
           {provide:OverlayModule, useValue:OverlayModulestub},
        ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
