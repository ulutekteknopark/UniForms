import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddRadioDialogComponent } from './add-radio-dialog.component';

describe('AddRadioDialogComponent', () => {
  let component: AddRadioDialogComponent;
  let fixture: ComponentFixture<AddRadioDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddRadioDialogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AddRadioDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
