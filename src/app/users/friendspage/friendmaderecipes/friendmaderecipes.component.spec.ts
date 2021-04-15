import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FriendmaderecipesComponent } from './friendmaderecipes.component';

describe('FriendmaderecipesComponent', () => {
  let component: FriendmaderecipesComponent;
  let fixture: ComponentFixture<FriendmaderecipesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FriendmaderecipesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FriendmaderecipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
