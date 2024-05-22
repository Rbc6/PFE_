import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRvComponent } from './view-rv.component';

describe('ViewRvComponent', () => {
  let component: ViewRvComponent;
  let fixture: ComponentFixture<ViewRvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewRvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewRvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
