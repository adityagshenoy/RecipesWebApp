import { OverlayModule } from '@angular/cdk/overlay';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

import { SearchDialogueboxComponent } from './search-dialoguebox.component';

describe('SearchDialogueboxComponent', () => {
  let component: SearchDialogueboxComponent;
  let fixture: ComponentFixture<SearchDialogueboxComponent>;

  let OverlayModulestub: Partial<OverlayModule>;
  OverlayModulestub = {
    
  }
  let matdialogStub: Partial<MatDialog>;
  matdialogStub = {
    
  }
  let matdialogRefStub:Partial<MatDialogRef<SearchDialogueboxComponent>>
  matdialogRefStub = {

  }


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchDialogueboxComponent ],
      providers:[{provide:MatDialog, useValue:matdialogStub},{provide:OverlayModule, useValue:OverlayModulestub},
                  {provide:MatDialogRef, useValue:matdialogRefStub}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchDialogueboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
