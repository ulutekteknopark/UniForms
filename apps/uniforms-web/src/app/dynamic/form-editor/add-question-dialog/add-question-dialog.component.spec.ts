import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddQuestionDialogComponent } from './add-question-dialog.component';

describe('AddQuestionDialogComponent', () => {
  let component: AddQuestionDialogComponent;
  let fixture: ComponentFixture<AddQuestionDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddQuestionDialogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AddQuestionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
