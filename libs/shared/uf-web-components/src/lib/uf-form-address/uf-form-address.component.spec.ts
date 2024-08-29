import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UfFormAddressComponent } from './uf-form-address.component';

describe('UfFormAddressComponent', () => {
  let component: UfFormAddressComponent;
  let fixture: ComponentFixture<UfFormAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UfFormAddressComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UfFormAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
