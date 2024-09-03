import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddDropdownDialogComponent } from './add-dropdown-dialog.component';

describe('AddDropdownDialogComponent', () => {
  let component: AddDropdownDialogComponent;
  let fixture: ComponentFixture<AddDropdownDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddDropdownDialogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AddDropdownDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
