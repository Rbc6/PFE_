import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewsDossierComponent } from './views-dossier.component';

describe('ViewsDossierComponent', () => {
  let component: ViewsDossierComponent;
  let fixture: ComponentFixture<ViewsDossierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewsDossierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewsDossierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
