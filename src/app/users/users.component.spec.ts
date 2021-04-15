import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../Models/RecipeModel';
import { UsersrvcService } from '../Services/usersrvc.service';

import { UsersComponent } from './users.component';


describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;



  beforeEach(waitForAsync(() => {
    const fakeActivatedRoute = {
      snapshot: { data: {  } }
    } as ActivatedRoute;
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
    };
    TestBed.configureTestingModule({

      declarations: [ UsersComponent ],
      providers: [{provide:ActivatedRoute, useValue:{snapshot:{params:{id:1}}}}, 
        { provide: UsersrvcService, useValue: userServiceStub }
            ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should test active routes', () => {
   // expect(component).toBeTruthy();
    let linkelement  = fixture.debugElement.query(By.css('a')).nativeElement;
    linkelement.click();
    
    let linkelementitem  = fixture.debugElement.query(By.css('.navbar-brand'));
    expect(linkelementitem.styles.backgroundColor).toBe('');//should be blue not setting anything

  });

});
