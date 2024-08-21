import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreatedFormsComponent } from './created-forms.component';

describe('CreatedFormsComponent', () => {
  let component: CreatedFormsComponent;
  let fixture: ComponentFixture<CreatedFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatedFormsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CreatedFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
