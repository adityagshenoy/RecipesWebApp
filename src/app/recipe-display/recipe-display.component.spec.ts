import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';


import { RecipeDisplayComponent } from './recipe-display.component';
import { RecipeDataService } from '../Services/recipe-data.service';
import { ActivatedRoute, ActivatedRouteSnapshot, Data, ParamMap, Params, Route, Router, UrlSegment } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { LoggedinemitService } from '../Services/loggedinemit.service';
import { RecipesrvcService } from '../Services/recipesrvc.service';
import { Recipe, User } from '../Models/RecipeModel';
import { UsersrvcService } from '../Services/usersrvc.service';
import { Observable } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ReadyTimePipe } from '../Shared/Pipes/ready-time.pipe';

import {TempJOKES, TempRECIPES, TempTrivia } from './../Services/TempRecipearray';
import { By } from '@angular/platform-browser';



describe('RecipeDisplayComponent', () => {
  
  let component: RecipeDisplayComponent;
  let fixture: ComponentFixture<RecipeDisplayComponent>;

  var usertst : User;
  usertst = new User();
  usertst.EmailId = "recipetetsuite"
  var recipetest:Recipe;
    recipetest = new Recipe();
    recipetest.title  ="Intestsuite";

  // new Observable<any>(observer => {
  //   observer.next(usertst);

  beforeEach(waitForAsync(() => {
    

    let userServiceStub: Partial<UsersrvcService>;
    userServiceStub = {
        addFriend(userid, frienduserid){
return new Observable<any>(observer => {
    observer.next(usertst);
        })}
    };
    
    class mockUserService {
        addFriend(userid, frienduserid){
            return new Observable<any>(observer => {
                observer.next(usertst);
                    })}
    }

    let loggedinServiceStub: Partial<LoggedinemitService>;
    loggedinServiceStub = {
      emitloggedingaurd()
      {
        return new Observable<boolean>((observer) => {setInterval(()=> observer.next(true),100)})
      }
    };
    let matdialogstub : Partial<MatDialog>;
    matdialogstub = {
    };
    let router : Partial<Router>;
    router = {
    };
    let httpclient : Partial<HttpClient>;
    httpclient = {
    };
    let rdtimepipe : Partial<ReadyTimePipe>;
    rdtimepipe = {
        transform(readyinmnutes: number, ...args: unknown[]): string {

            var retstring:string;
            let hours:number;
            hours = Math.floor(readyinmnutes / 60);
            
        let minutes = readyinmnutes %60;
        if(readyinmnutes==0)
        {retstring="Not Available"}
        else if(hours ==0)
        {
          retstring = String(minutes);
        }
        else{
          retstring = String(hours) + "hours " + minutes + "minutes";
        }
            return retstring;
        }
    };
       
      

    TestBed.configureTestingModule({
      declarations: [ RecipeDisplayComponent ,ReadyTimePipe ],
      providers:[{provide: Router, useValue:router},{provide:HttpClient, useValue:httpclient},
        
         {provide:MatDialog,useValue:matdialogstub},
        {provide:UsersrvcService,useClass:mockUserService},        
        {provide:LoggedinemitService,useValue:loggedinServiceStub},
        {provide:ActivatedRoute,useValue: {snapshot:{data: {recipe:
                                            new Observable<any>(observer => {
                                              observer.next({recipe:recipetest});})        
        }}}}
      ]
    })
    .compileComponents();
    
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    
  });

  it('should create', () => {
   

    //Activated route resolver not working.......check itlater
   expect(component).toBeTruthy();
  }),


it('should check recipeload by checking recipe loading recipei in test', () => {
    recipetest = new Recipe();
    recipetest  =TempRECIPES[0];
    var recipetest:Recipe;
    recipetest = new Recipe();
    recipetest.title  ="Intestsuite";
    component.recipe = recipetest;   
    
    fixture.detectChanges();
    fixture.detectChanges();    

    expect(fixture.debugElement.query(By.css("h1")).nativeElement.innerHTML).toBe(" Intestsuite")    
  });


})