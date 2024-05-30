import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddApcisComponent } from './add-apcis.component';

describe('AddApcisComponent', () => {
  let component: AddApcisComponent;
  let fixture: ComponentFixture<AddApcisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddApcisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddApcisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
