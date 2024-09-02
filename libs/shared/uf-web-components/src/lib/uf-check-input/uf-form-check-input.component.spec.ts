import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UfFormCheckInputComponent } from './uf-form-check-input.component';

describe('UfFormCheckInputComponent', () => {
  let component: UfFormCheckInputComponent;
  let fixture: ComponentFixture<UfFormCheckInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UfFormCheckInputComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UfFormCheckInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
