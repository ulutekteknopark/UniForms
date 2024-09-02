import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UfFormRateInputComponent } from './uf-form-rate-input.component';

describe('UfFormRateInputComponent', () => {
  let component: UfFormRateInputComponent;
  let fixture: ComponentFixture<UfFormRateInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UfFormRateInputComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UfFormRateInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
