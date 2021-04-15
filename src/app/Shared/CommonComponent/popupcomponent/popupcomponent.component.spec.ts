import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupcomponentComponent } from './popupcomponent.component';

describe('PopupcomponentComponent', () => {
  let component: PopupcomponentComponent;
  let fixture: ComponentFixture<PopupcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupcomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
