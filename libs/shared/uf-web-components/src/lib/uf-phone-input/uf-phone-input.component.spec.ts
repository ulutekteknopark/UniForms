import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UfPhoneInputComponent } from './uf-phone-input.component';

describe('UfPhoneInputComponent', () => {
  let component: UfPhoneInputComponent;
  let fixture: ComponentFixture<UfPhoneInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UfPhoneInputComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UfPhoneInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
