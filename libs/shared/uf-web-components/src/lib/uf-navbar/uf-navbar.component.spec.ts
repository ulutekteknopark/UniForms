import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UfNavbarComponent } from './uf-navbar.component';

describe('UfNavbarComponent', () => {
  let component: UfNavbarComponent;
  let fixture: ComponentFixture<UfNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UfNavbarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UfNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
