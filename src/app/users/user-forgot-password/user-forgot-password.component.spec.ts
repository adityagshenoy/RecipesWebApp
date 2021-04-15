import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { UserForgotPasswordComponent } from './user-forgot-password.component';

describe('UserForgotPasswordComponent', () => {
  let component: UserForgotPasswordComponent;
  let fixture: ComponentFixture<UserForgotPasswordComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UserForgotPasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserForgotPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
