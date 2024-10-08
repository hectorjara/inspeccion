import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudInspeccionComponent } from './solicitud-inspeccion.component';

describe('SolicitudInspeccionComponent', () => {
  let component: SolicitudInspeccionComponent;
  let fixture: ComponentFixture<SolicitudInspeccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolicitudInspeccionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolicitudInspeccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
