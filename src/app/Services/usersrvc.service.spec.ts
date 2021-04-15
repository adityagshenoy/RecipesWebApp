import { OverlayModule } from '@angular/cdk/overlay';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';

import { UsersrvcService } from './usersrvc.service';

describe('UsersrvcService', () => {
  let service: UsersrvcService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[HttpClient,HttpHandler, OverlayModule,MatDialog]
    });
    service = TestBed.inject(UsersrvcService);
  });

  it('should be created', () => {
    //expect(service).toBeTruthy();
  });
});
