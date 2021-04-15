import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryRcpAuthComponent } from './category-rcp-auth.component';

describe('CategoryRcpAuthComponent', () => {
  let component: CategoryRcpAuthComponent;
  let fixture: ComponentFixture<CategoryRcpAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryRcpAuthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryRcpAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
