import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UfIntroCardComponent } from './uf-intro-card.component';

describe('UfIntroCardComponent', () => {
  let component: UfIntroCardComponent;
  let fixture: ComponentFixture<UfIntroCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UfIntroCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UfIntroCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
