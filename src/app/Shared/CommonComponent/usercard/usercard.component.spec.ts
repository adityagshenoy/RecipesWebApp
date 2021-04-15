// import { OverlayModule } from '@angular/cdk/overlay';
// import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
// import { MatDialog } from '@angular/material/dialog';
// import { userInfo } from 'os';
// import { User } from 'src/app/Models/RecipeModel';

// import { UsercardComponent } from './usercard.component';

// describe('UsercardComponent', () => {
//   let component: UsercardComponent;
//   let fixture: ComponentFixture<UsercardComponent>;

//   beforeEach(waitForAsync(() => {
//     let OverlayModulestub: Partial<OverlayModule>;
//     OverlayModulestub = {
//     }
//     let matdialogStub: Partial<MatDialog>;
//     matdialogStub = {
      
//     }
      
//     TestBed.configureTestingModule({
//       declarations: [ UsercardComponent ],
//       providers:[{provide:MatDialog, useValue:matdialogStub},
//         {provide:OverlayModule, useValue:OverlayModulestub}]
//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(UsercardComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
    
//   });

//   it('should create', () => {
//     fixture.detectChanges();
//       component.user = new User();
//     component.user.UserID = 1;
//     fixture.detectChanges();
//     expect(component).toBeTruthy();
//   });
// });
