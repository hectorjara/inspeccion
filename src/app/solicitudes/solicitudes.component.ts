import { Component, inject, OnInit } from '@angular/core';
import { SolicitudInspeccionService } from '../servicios/solicitud-inspeccion.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-solicitudes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './solicitudes.component.html',
  styleUrl: './solicitudes.component.css'
})
export class SolicitudesComponent implements OnInit {
  solicitudInspService = inject(SolicitudInspeccionService);
  solicitudes: any[] = [];

  ngOnInit(): void {
    this.obtenerSolicitudes();
  }

  obtenerSolicitudes() {
    this.solicitudInspService.obtenerSolicitudes()
    .subscribe(data => {
      this.solicitudes = data;
    })
  }

}
