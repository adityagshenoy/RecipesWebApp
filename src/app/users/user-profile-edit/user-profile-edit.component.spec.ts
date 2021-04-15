import { OverlayModule } from '@angular/cdk/overlay';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/Models/RecipeModel';
import { UsersrvcService } from 'src/app/Services/usersrvc.service';

import { UserProfileEditComponent } from './user-profile-edit.component';

describe('UserProfileEditComponent', () => {
  let component: UserProfileEditComponent;
  let fixture: ComponentFixture<UserProfileEditComponent>;
  const fakeActivatedRoute = {
    snapshot: { data: {  } }
  } as ActivatedRoute;
  beforeEach(waitForAsync(() => {
    	 
	  let userServiceStub: Partial<UsersrvcService>;
    userServiceStub = {
        getUser(id:string)
        {
            var  usertst = new User();
            usertst.Firstname = "intestsuite";
            usertst.SocialMediaHandles = [] as any;
            usertst.SocialMediaHandles['pinterest'] = "testpin";

            return new Observable<any>(observer => {
                observer.next(usertst);
        });
        }
    }
    let OverlayModulestub: Partial<OverlayModule>;
    OverlayModulestub = {
    }
    let matdialogStub: Partial<MatDialog>;
    matdialogStub = {      
    }

    TestBed.configureTestingModule({
      declarations: [ UserProfileEditComponent ],
      providers:[{provide:ActivatedRoute, useValue: {snapshot:{params:{id:1}}}}, 
        { provide: UsersrvcService, useValue: userServiceStub },
           { provide:Router, useValue: Router}, FormBuilder, MatDialog,
           {provide:MatDialog, useValue:matdialogStub},
           {provide:OverlayModule, useValue:OverlayModulestub},
        ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfileEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
