import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddAddressDialogComponent } from './add-address-dialog.component';

describe('AddDateDialogComponent', () => {
  let component: AddAddressDialogComponent;
  let fixture: ComponentFixture<AddAddressDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddAddressDialogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AddAddressDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
