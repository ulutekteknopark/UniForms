import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UfEmailInputComponent } from './uf-email-input.component';

describe('UfEmailInputComponent', () => {
  let component: UfEmailInputComponent;
  let fixture: ComponentFixture<UfEmailInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UfEmailInputComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UfEmailInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
