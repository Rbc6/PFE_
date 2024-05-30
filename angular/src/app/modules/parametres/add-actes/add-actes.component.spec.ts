import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddActesComponent } from './add-actes.component';

describe('AddActesComponent', () => {
  let component: AddActesComponent;
  let fixture: ComponentFixture<AddActesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddActesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddActesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
