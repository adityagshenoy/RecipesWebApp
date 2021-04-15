import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { EditReviewdialogComponent } from './edit-reviewdialog.component';

describe('EditReviewdialogComponent', () => {
  let component: EditReviewdialogComponent;
  let fixture: ComponentFixture<EditReviewdialogComponent>;
  

  

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EditReviewdialogComponent ],
      providers:[{provide:MAT_DIALOG_DATA, useValue:"matdialogdataStub"}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditReviewdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
