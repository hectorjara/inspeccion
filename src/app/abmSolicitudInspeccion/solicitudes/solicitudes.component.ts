import { Component, inject, OnInit } from '@angular/core';
import { SolicitudInspeccionService } from '../../servicios/solicitud-inspeccion.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router'

@Component({
  selector: 'app-solicitudes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './solicitudes.component.html',
  styleUrl: './solicitudes.component.css'
})
export class SolicitudesComponent implements OnInit {


  solicitudInspService = inject(SolicitudInspeccionService);
  router = inject(Router);
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

  navegarA() {
    this.router.navigate(['/solicitudes/registrar']);
  }

  eliminarSolicitud(id_solicitud:number) {
    this.solicitudInspService.eliminarSolicitud(id_solicitud)
    .subscribe(data => {
      if(data.message==="Solicitud de inspección eliminada correctamente."){
        this.router.navigate(['/inicio']);
      };
    })
  }

}
