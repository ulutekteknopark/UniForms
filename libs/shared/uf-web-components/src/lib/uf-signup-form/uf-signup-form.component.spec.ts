import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UfSignupFormComponent } from './uf-signup-form.component';

describe('UfSignupFormComponent', () => {
  let component: UfSignupFormComponent;
  let fixture: ComponentFixture<UfSignupFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UfSignupFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UfSignupFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
