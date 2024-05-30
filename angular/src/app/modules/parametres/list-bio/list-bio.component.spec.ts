import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBioComponent } from './list-bio.component';

describe('ListBioComponent', () => {
  let component: ListBioComponent;
  let fixture: ComponentFixture<ListBioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListBioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListBioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
