import { OverlayModule } from '@angular/cdk/overlay';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersrvcService } from 'src/app/Services/usersrvc.service';

import { UserRegisterComponent } from './user-register.component';

describe('UserRegisterComponent', () => {
  let component: UserRegisterComponent;
  let fixture: ComponentFixture<UserRegisterComponent>;
  let OverlayModulestub: Partial<OverlayModule>;
    OverlayModulestub = {
    }
    let matdialogStub: Partial<MatDialog>;
    matdialogStub = {
      
    }


  beforeEach(waitForAsync(() => {
     
	  let userServiceStub: Partial<UsersrvcService>;
    userServiceStub = {
    };
    TestBed.configureTestingModule({
      declarations: [ UserRegisterComponent ],
      providers:[
        { provide: UsersrvcService, useValue: userServiceStub },
           { provide:Router, useValue: Router}, FormBuilder,
           {provide:MatDialog, useValue:matdialogStub},
           {provide:OverlayModule, useValue:OverlayModulestub},
        ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
