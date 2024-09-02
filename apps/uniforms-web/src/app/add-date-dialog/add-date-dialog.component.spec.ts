import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddDateDialogComponent } from './add-date-dialog.component';

describe('AddDateDialogComponent', () => {
  let component: AddDateDialogComponent;
  let fixture: ComponentFixture<AddDateDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddDateDialogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AddDateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
