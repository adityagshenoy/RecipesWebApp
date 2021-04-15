import { NO_ERRORS_SCHEMA } from '@angular/compiler';
import { TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { userInfo } from 'os';
import { User } from '../Models/RecipeModel';
import { UserSignInComponent } from '../users/user-sign-in/user-sign-in.component';

import { LoggedinemitService } from './loggedinemit.service';
import { UsersrvcService } from './usersrvc.service';

describe('LoggedinemitService', () => {
  let service: LoggedinemitService;
  //usercomp:UserSignInComponent;

  beforeEach(() => {
      
      
  
    TestBed.configureTestingModule({
      declarations: [  ],
      providers:[ ],
      schemas: [NO_ERRORS_SCHEMA]
      
    });
    service = TestBed.inject(LoggedinemitService);
    
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  
it('should return true/false',() => {
  
  service.setloginsession("1","testspec","testspecl")
  service.setloginsessionflag(true)
    expect(sessionStorage.getItem('isLoggedin')).toBe("true");
    
})
});

//5166400558315678
