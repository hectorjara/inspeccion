import { TestBed } from '@angular/core/testing';

import { SolicitudInspeccionService } from './solicitud-inspeccion.service';

describe('SolicitudInspeccionService', () => {
  let service: SolicitudInspeccionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SolicitudInspeccionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
