import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DynamicingredientComponent } from './dynamicingredient.component';

describe('DynamicingredientComponent', () => {
  let component: DynamicingredientComponent;
  let fixture: ComponentFixture<DynamicingredientComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicingredientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicingredientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
