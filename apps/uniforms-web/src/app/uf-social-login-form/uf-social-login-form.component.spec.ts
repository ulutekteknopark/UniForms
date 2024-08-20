import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UfSocialLoginFormComponent } from './uf-social-login-form.component';

describe('UfLoginFormComponent', () => {
  let component: UfSocialLoginFormComponent;
  let fixture: ComponentFixture<UfSocialLoginFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UfSocialLoginFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UfSocialLoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
