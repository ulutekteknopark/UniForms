import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UfFormInputComponent } from './uf-form-input.component';

describe('UfFormInputComponent', () => {
  let component: UfFormInputComponent;
  let fixture: ComponentFixture<UfFormInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UfFormInputComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UfFormInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
