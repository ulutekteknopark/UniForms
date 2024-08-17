import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UfPasswordInputComponent } from './uf-password-input.component';

describe('UfPasswordInputComponent', () => {
  let component: UfPasswordInputComponent;
  let fixture: ComponentFixture<UfPasswordInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UfPasswordInputComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UfPasswordInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
