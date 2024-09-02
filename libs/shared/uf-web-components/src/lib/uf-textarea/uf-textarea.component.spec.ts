import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UfTextareaComponent } from './uf-textarea.component';

describe('UfTextareaComponent', () => {
  let component: UfTextareaComponent;
  let fixture: ComponentFixture<UfTextareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UfTextareaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UfTextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
