import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddRateDialogComponent } from './add-rate-dialog.component';

describe('AddDateDialogComponent', () => {
  let component: AddRateDialogComponent;
  let fixture: ComponentFixture<AddRateDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddRateDialogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AddRateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
