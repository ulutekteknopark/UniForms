import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UfFormPreviewComponent } from './uf-form-preview.component';

describe('UfFormPreviewComponent', () => {
  let component: UfFormPreviewComponent;
  let fixture: ComponentFixture<UfFormPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UfFormPreviewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UfFormPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
