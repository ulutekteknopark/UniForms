import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddTextfieldDialogComponent } from './add-textfield-dialog.component';

describe('AddTextfieldDialogComponent', () => {
  let component: AddTextfieldDialogComponent;
  let fixture: ComponentFixture<AddTextfieldDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddTextfieldDialogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AddTextfieldDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
