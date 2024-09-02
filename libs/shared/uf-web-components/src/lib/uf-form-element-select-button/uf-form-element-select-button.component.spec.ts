import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UfFormElementSelectButtonComponent } from './uf-form-element-select-button.component';

describe('UfFormElementSelectButtonComponent', () => {
  let component: UfFormElementSelectButtonComponent;
  let fixture: ComponentFixture<UfFormElementSelectButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UfFormElementSelectButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UfFormElementSelectButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
