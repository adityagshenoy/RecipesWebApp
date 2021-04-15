import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';
import { User } from 'src/app/Models/RecipeModel';
import { UsersrvcService } from 'src/app/Services/usersrvc.service';

import { AllauthorsComponent } from './allauthors.component';


describe('AllauthorsComponent', () => {
  let component: AllauthorsComponent;
  let fixture: ComponentFixture<AllauthorsComponent>;


  class mockUserservice{
    getAuthors() {
      var usertstarray : [User]=[] as any;
      usertstarray.push(usertst)
      usertstarray.push(usertst2)
      return new Observable<any>(observer => {
          observer.next(usertstarray);
  });}
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllauthorsComponent ],
      providers:[{ provide: UsersrvcService, useClass: mockUserservice }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllauthorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});



let usertst = new User();
usertst.Firstname = "intestsuite";
usertst.Lastname = "intestsuitelast";
usertst.FavRecipesId =[] as any;
usertst.FavRecipesId.push("1");
usertst.FavRecipesId.push("2");
usertst.Friends = [] as any;
usertst.Friends.push("10");
usertst.Friends.push("13");
// usertst.Notifications.push("11");

usertst.Gender = "F";
usertst.Password = "testinsuite";
usertst.EmailId = "testinemail";

let usertst2 = new User();
usertst.Firstname = "intestsuite2";
usertst.Lastname = "intestsuitelast2";
usertst.FavRecipesId =[] as any;
usertst.FavRecipesId.push("1");
usertst.FavRecipesId.push("2");
usertst.Friends = [] as any;
usertst.Friends.push("10");
usertst.Friends.push("13");
// usertst.Notifications.push("11");

usertst.Gender = "M";
usertst.Password = "testinsuite2";
usertst.EmailId = "testinemail2";