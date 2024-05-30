import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAllergyComponent } from './list-allergy.component';

describe('ListAllergyComponent', () => {
  let component: ListAllergyComponent;
  let fixture: ComponentFixture<ListAllergyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAllergyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListAllergyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
