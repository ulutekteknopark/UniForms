import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UfFormChoicesComponent } from './form-choices.component';

describe('UfFormQuestionComponent', () => {
  let component: UfFormChoicesComponent;
  let fixture: ComponentFixture<UfFormChoicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UfFormChoicesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UfFormChoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
