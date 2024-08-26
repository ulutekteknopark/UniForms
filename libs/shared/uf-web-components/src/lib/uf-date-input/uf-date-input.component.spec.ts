import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UfDateInputComponent } from './uf-date-input.component';

describe('UfDateInputComponent', () => {
  let component: UfDateInputComponent;
  let fixture: ComponentFixture<UfDateInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UfDateInputComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UfDateInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
