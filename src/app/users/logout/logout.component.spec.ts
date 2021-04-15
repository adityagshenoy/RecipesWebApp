import { ComponentFixture, getTestBed, TestBed, waitForAsync } from '@angular/core/testing';
import { Router } from '@angular/router';

import { LogoutComponent } from './logout.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { LoggedinemitService } from 'src/app/Services/loggedinemit.service';


describe('LogoutComponent', () => {
  let component: LogoutComponent;
  let fixture: ComponentFixture<LogoutComponent>;
  let httpMock: HttpTestingController;
  let injector: TestBed;
  let service: LoggedinemitService;

  beforeEach(waitForAsync(() => {
    let myServiceMock: any;//Partial<MAT_DIALOG_DATA>;
    myServiceMock = {
        navigate() {
            return "test"
        }
    };
    TestBed.configureTestingModule({
      declarations: [ LogoutComponent ],
      providers:[{provide: Router, useValue: myServiceMock}],
      imports:[HttpClientTestingModule]
    })
    .compileComponents();
    injector = getTestBed();
    service = injector.get(LoggedinemitService);
    httpMock = injector.get(HttpTestingController);
  }
  
  ));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
      ///write test for checking navigation ...if possible to home page
    expect(component).toBeTruthy();
  });
});
