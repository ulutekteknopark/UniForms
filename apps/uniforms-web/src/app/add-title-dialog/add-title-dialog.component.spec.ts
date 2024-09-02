import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddTitleDialogComponent } from './add-title-dialog.component';

describe('AddTitleDialogComponent', () => {
  let component: AddTitleDialogComponent;
  let fixture: ComponentFixture<AddTitleDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddTitleDialogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AddTitleDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
