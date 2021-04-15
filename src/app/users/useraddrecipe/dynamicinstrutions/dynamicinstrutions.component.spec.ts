import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DynamicinstrutionsComponent } from './dynamicinstrutions.component';

describe('DynamicinstrutionsComponent', () => {
  let component: DynamicinstrutionsComponent;
  let fixture: ComponentFixture<DynamicinstrutionsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicinstrutionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicinstrutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
