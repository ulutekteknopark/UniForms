import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UfFormQuestionComponent } from './form-question.component';

describe('UfFormQuestionComponent', () => {
  let component: UfFormQuestionComponent;
  let fixture: ComponentFixture<UfFormQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UfFormQuestionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UfFormQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
