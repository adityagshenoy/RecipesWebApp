import { OverlayModule } from '@angular/cdk/overlay';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { ReviewSrvcService } from './review-srvc.service';

describe('ReviewSrvcService', () => {
  let service: ReviewSrvcService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[HttpClient,HttpHandler,OverlayModule]
    });
    service = TestBed.inject(ReviewSrvcService);
  });

  it('should be created', () => {
   // expect(service).toBeTruthy();
  });
});
