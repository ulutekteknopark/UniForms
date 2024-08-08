import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UfCardComponent } from './uf-card.component';

describe('UfCardComponent', () => {
  let component: UfCardComponent;
  let fixture: ComponentFixture<UfCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UfCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UfCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
