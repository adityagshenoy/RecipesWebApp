import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodmapsearchComponent } from './foodmapsearch.component';


describe('FoodmapsearchComponent', () => {
  let component: FoodmapsearchComponent;
  let fixture: ComponentFixture<FoodmapsearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodmapsearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodmapsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
