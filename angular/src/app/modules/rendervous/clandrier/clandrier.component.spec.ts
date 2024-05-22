import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClandrierComponent } from './clandrier.component';

describe('ClandrierComponent', () => {
  let component: ClandrierComponent;
  let fixture: ComponentFixture<ClandrierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClandrierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClandrierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
