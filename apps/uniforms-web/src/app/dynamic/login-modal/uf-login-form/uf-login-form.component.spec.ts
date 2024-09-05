import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UfLoginFormComponent } from './uf-login-form.component';

describe('UfLoginFormComponent', () => {
  let component: UfLoginFormComponent;
  let fixture: ComponentFixture<UfLoginFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UfLoginFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UfLoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
