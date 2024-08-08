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

  it('should have default values', () => {
    expect(component.label).toBe('Button');
    expect(component.size).toBe('medium');
    expect(component.disabled).toBeFalsy();
  });

  it('should update properties', () => {
    component.label = 'New Label';
    component.size = 'large';
    component.disabled = true;
    fixture.detectChanges();

    const buttonElement: HTMLButtonElement = fixture.nativeElement.querySelector('button');
    expect(buttonElement.textContent).toBe('New Label');
    expect(buttonElement.classList.contains('large')).toBeTruthy();
    expect(buttonElement.disabled).toBeTruthy();
  });
});
