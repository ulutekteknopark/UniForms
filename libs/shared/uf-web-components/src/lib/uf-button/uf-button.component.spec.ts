import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UfButtonComponent } from './uf-button.component';

describe('UfButtonComponent', () => {
  let component: UfButtonComponent;
  let fixture: ComponentFixture<UfButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UfButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UfButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
