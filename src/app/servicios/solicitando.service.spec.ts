import { TestBed } from '@angular/core/testing';

import { SolicitandoService } from './solicitando.service';

describe('SolicitandoService', () => {
  let service: SolicitandoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SolicitandoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
