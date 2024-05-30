import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListApcisComponent } from './list-apcis.component';

describe('ListApcisComponent', () => {
  let component: ListApcisComponent;
  let fixture: ComponentFixture<ListApcisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListApcisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListApcisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
