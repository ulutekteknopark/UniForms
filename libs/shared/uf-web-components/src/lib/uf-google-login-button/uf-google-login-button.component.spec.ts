import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UfGoogleLoginButtonComponent } from './uf-google-login-button.component';

describe('UfGoogleLoginButtonComponent', () => {
  let component: UfGoogleLoginButtonComponent;
  let fixture: ComponentFixture<UfGoogleLoginButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UfGoogleLoginButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UfGoogleLoginButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
