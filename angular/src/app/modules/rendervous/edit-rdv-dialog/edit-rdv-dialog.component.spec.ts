import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRdvDialogComponent } from './edit-rdv-dialog.component';

describe('EditRdvDialogComponent', () => {
  let component: EditRdvDialogComponent;
  let fixture: ComponentFixture<EditRdvDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditRdvDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditRdvDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
