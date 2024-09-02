import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddCheckDialogComponent } from './add-check-dialog.component';

describe('AddCheckDialogComponent', () => {
  let component: AddCheckDialogComponent;
  let fixture: ComponentFixture<AddCheckDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddCheckDialogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AddCheckDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
