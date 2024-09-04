import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UfDropdownComponent } from './uf-dropdown.component';

describe('UfDropdownComponent', () => {
  let component: UfDropdownComponent;
  let fixture: ComponentFixture<UfDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UfDropdownComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UfDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
