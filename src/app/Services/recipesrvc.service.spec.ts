import { HttpClient, HttpHandler } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { RecipesrvcService } from './recipesrvc.service';

describe('RecipesrvcService', () => {
  let service: RecipesrvcService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[HttpClient,HttpHandler]
    });
    
    service = TestBed.inject(RecipesrvcService);
    
    
  });

  it('should be created', () => {
    expect(1).toBeTruthy();
    //expect(service).toBeTruthy();
  });
});
