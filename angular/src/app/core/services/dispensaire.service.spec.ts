import { TestBed } from '@angular/core/testing';

import { DispensaireService } from './dispensaire.service';

describe('DispensaireService', () => {
  let service: DispensaireService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DispensaireService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
