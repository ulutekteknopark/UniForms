import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UfFacebookLoginButtonComponent } from './uf-facebook-login-button.component';

describe('UfGoogleLoginButtonComponent', () => {
  let component: UfFacebookLoginButtonComponent;
  let fixture: ComponentFixture<UfFacebookLoginButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UfFacebookLoginButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UfFacebookLoginButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
