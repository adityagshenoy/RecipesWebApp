import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AlertCommonComponent } from './alert-common.component';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { stringify } from '@angular/compiler/src/util';
import { By } from '@angular/platform-browser';

describe('AlertCommonComponent', () => {
  let component: AlertCommonComponent;
  let fixture: ComponentFixture<AlertCommonComponent>;

  beforeEach(waitForAsync(() => {
    let myServiceMock: any;//Partial<MAT_DIALOG_DATA>;
    myServiceMock = {
"Testing":"test"
    };
    TestBed.configureTestingModule({
      declarations: [ AlertCommonComponent ],
      providers:[ {provide: MAT_DIALOG_DATA, useValue: myServiceMock}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertCommonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should assign the dialog boxes with tge set data', () => {
   var datatest =  [] as any;
   var var1:any;
 
   datatest.push({"message":"testmessage"});
    component.data =  datatest;
    component.ngOnInit();
    ///to set the text in h2, h3 using props
   // expect(fixture.debugElement.query(By.css('h2'))).toBe("test title");
    expect(fixture.debugElement.query(By.css('h3')).nativeElement).toBe("testmessage");
    //expect(component).toBeTruthy();
  });
});
