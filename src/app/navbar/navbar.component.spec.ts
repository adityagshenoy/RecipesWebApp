import { OverlayModule } from '@angular/cdk/overlay';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { By } from '@angular/platform-browser';

import { Observable } from 'rxjs';
import { LoggedinemitService } from '../Services/loggedinemit.service';

import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  let OverlayModulestub: Partial<OverlayModule>;
  OverlayModulestub = {
    
  }
  let matdialogStub: Partial<MatDialog>;
  matdialogStub = {
    
  }

  beforeEach(waitForAsync(() => {
    
    let loggedinServiceStub: Partial<LoggedinemitService>;
        loggedinServiceStub = {
          emitloggedingaurd()
          {
            return new Observable<boolean>((observer) => {setInterval(()=> observer.next(true),100)})
          }
        };
    TestBed.configureTestingModule({
      declarations: [ NavbarComponent ],
      imports:[MatMenuModule],
      providers:[{provide:LoggedinemitService,useValue:loggedinServiceStub},
             {provide:LoggedinemitService,useValue:loggedinServiceStub},
             {provide:MatDialog, useValue:matdialogStub},{provide:OverlayModule, useValue:OverlayModulestub}
    ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);    
    component = fixture.componentInstance;
    fixture.detectChanges();
    spyOn(sessionStorage,'setItem').and.callFake(
      (key,value) => {
        return sessionStorage[key] = value;
      }
    )
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should assign the userids and usernames in template of Navbar when logged in by the User', () => {
      sessionStorage.setItem("UserID","3")
      sessionStorage.setItem("Firstname","intestsuite")
      sessionStorage.setItem("Lastname","intestsuitelast");
      component.isLoggedin = true;
      
      
      component.Userfirstname = "intestsuite";
      component.UserID = "3";
      component.Userlastname = "intestsuitelast"
      
      fixture.detectChanges();
    
    expect(fixture.debugElement.query(By.css('h2#labelcreatelogin')).nativeElement.innerHTML).toBe("Logged in as: intestsuite intestsuitelast ")
  });



});
