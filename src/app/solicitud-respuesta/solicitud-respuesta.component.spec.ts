import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudRespuestaComponent } from './solicitud-respuesta.component';

describe('SolicitudRespuestaComponent', () => {
  let component: SolicitudRespuestaComponent;
  let fixture: ComponentFixture<SolicitudRespuestaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolicitudRespuestaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolicitudRespuestaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
