import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UfTemplatePreviewComponent } from './uf-template-preview.component';

describe('UfTemplatePreviewComponent', () => {
  let component: UfTemplatePreviewComponent;
  let fixture: ComponentFixture<UfTemplatePreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UfTemplatePreviewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UfTemplatePreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
