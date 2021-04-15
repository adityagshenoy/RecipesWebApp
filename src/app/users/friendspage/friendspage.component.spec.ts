import { HttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/Models/RecipeModel';
import { UsersrvcService } from 'src/app/Services/usersrvc.service';
import { UserRegisterComponent } from '../user-register/user-register.component';

import { FriendspageComponent } from './friendspage.component';


describe('FriendspageComponent', () => {
  let component: FriendspageComponent;
  let fixture: ComponentFixture<FriendspageComponent>;

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
            usertst.Friends = [] as any;
            usertst.Friends.push("2");
            usertst.Friends.push("3");

            return new Observable<any>(observer => {
                observer.next(usertst);
        });
         }

    };
    
    TestBed.configureTestingModule({
      declarations: [ FriendspageComponent ],
      providers: [
        { provide: UsersrvcService, useValue: userServiceStub },
        {provide:ActivatedRoute, useValue:{parent:{snapshot:{params:{id:1}}}}}, ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FriendspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    
    expect(component).toBeTruthy();
  });
});
