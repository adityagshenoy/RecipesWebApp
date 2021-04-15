import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ActivatedRoute, ActivatedRouteSnapshot, Data, ParamMap, Params, Route, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/Models/RecipeModel';
import { RecipesrvcService } from 'src/app/Services/recipesrvc.service';
import { UsersrvcService } from 'src/app/Services/usersrvc.service';

import { AboutmeComponent } from './aboutme.component';


export class MockActivatedRoute implements ActivatedRoute{
    get paramMap(): Observable<ParamMap> {
        throw new Error('Method not implemented.');
    }
    get queryParamMap(): Observable<ParamMap> {
        throw new Error('Method not implemented.');
    }
    snapshot : ActivatedRouteSnapshot;
    _urlsegment : ActivatedRoute;
    url : Observable<UrlSegment[]>;
    params : Observable<Params>;
    queryParams : Observable<Params>;
    fragment : Observable<string>;
    data : Observable<Data>;
    outlet : string;
    component : string;
    routeConfig : Route;
    root : ActivatedRoute;
    parent : ActivatedRoute;
    firstChild : ActivatedRoute;
    children : ActivatedRoute[];
    pathFromRoot : ActivatedRoute[];
    toString() : string{
        return "";
    };
}

describe('AboutmeComponent', () => {
  let component: AboutmeComponent;
  let fixture: ComponentFixture<AboutmeComponent>;
  

  beforeEach(waitForAsync(() => {
    let userServiceStub: Partial<UsersrvcService>;
    let testroute: MockActivatedRoute;
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
    
    usertst.Gender = "M";
    usertst.Password = "testinsuite";
    usertst.EmailId = "testinemail";

    

    usertst.SocialMediaHandles = {"Ret":"tre","qwe":"yui"}
    

    userServiceStub = {
        
        getUser() {
            return new Observable<any>(observer => {
                observer.next(usertst);
        });}
    };
   
    var service :UsersrvcService;
    

     
    TestBed.configureTestingModule({
      declarations: [ AboutmeComponent ],
      providers: [{provide:ActivatedRoute, useValue: {parent:{snapshot:{params:{id:1}}}}}, 
            { provide: UsersrvcService, useValue: userServiceStub },
                ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    
    fixture = TestBed.createComponent(AboutmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should be trest by', () => {

    expect(component.userfor.Firstname).toBe("intestsuite");
  });
  
  it('should be trest spies by', () => {
    var servicesp :UsersrvcService;
    let usertst1 = new User();
    usertst1.Firstname = "forspy";
//     var spy = spyOn(servicesp, 'getUser').and.returnValue(  new Observable<any>(observer => {
//         observer.next(usertst1);
// }));
//expect(component.userfor).toBeTruthy();
  //  expect(component.userfor.Firstname).toBe("forspy");
  });
});
