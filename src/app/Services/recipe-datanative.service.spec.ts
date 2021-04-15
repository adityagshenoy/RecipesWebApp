import { HttpClient, HttpHandler } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { RecipeDatanativeService } from './recipe-datanative.service';

describe('RecipeDatanativeService', () => {
  let service: RecipeDatanativeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[HttpClient,HttpHandler]
    });
    service = TestBed.inject(RecipeDatanativeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
