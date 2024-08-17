import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UfCheckboxComponent } from './uf-checkbox.component';

describe('UfCheckboxComponent', () => {
  let component: UfCheckboxComponent;
  let fixture: ComponentFixture<UfCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UfCheckboxComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UfCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
