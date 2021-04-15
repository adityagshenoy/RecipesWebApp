import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Subject } from 'rxjs';
import { LoaderServiceService } from 'src/app/Services/loader-service.service';

import { ProgressSpinnerComponent } from './progress-spinner.component';

describe('ProgressSpinnerComponent', () => {
  let component: ProgressSpinnerComponent;
  let fixture: ComponentFixture<ProgressSpinnerComponent>;

  beforeEach(waitForAsync(() => {
    let loaderServiceStub: Partial<LoaderServiceService>;
    loaderServiceStub = {
        isLoading : new Subject<boolean>()
        
    };
    TestBed.configureTestingModule({
      declarations: [ ProgressSpinnerComponent ],
      providers:[{ provide: LoaderServiceService, useValue: loaderServiceStub } ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
