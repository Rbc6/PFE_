import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListParamedicalComponent } from './list-paramedical.component';

describe('ListParamedicalComponent', () => {
  let component: ListParamedicalComponent;
  let fixture: ComponentFixture<ListParamedicalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListParamedicalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListParamedicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
