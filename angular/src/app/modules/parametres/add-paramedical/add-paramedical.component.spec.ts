import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddParamedicalComponent } from './add-paramedical.component';

describe('AddParamedicalComponent', () => {
  let component: AddParamedicalComponent;
  let fixture: ComponentFixture<AddParamedicalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddParamedicalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddParamedicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
