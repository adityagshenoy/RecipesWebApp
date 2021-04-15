import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenubarmobileComponent } from './menubarmobile.component';

describe('MenubarmobileComponent', () => {
  let component: MenubarmobileComponent;
  let fixture: ComponentFixture<MenubarmobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenubarmobileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenubarmobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
