import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListActesComponent } from './list-actes.component';

describe('ListActesComponent', () => {
  let component: ListActesComponent;
  let fixture: ComponentFixture<ListActesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListActesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListActesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
