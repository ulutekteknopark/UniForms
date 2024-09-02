import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UfFormRadioInputComponent } from './uf-form-radio-input.component';

describe('UfFormRadioInputComponent', () => {
  let component: UfFormRadioInputComponent;
  let fixture: ComponentFixture<UfFormRadioInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UfFormRadioInputComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UfFormRadioInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
