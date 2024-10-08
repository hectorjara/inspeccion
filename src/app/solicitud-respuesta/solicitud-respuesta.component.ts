import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SolicitudInspeccionService } from '../servicios/solicitud-inspeccion.service';

@Component({
  selector: 'app-solicitud-respuesta',
  standalone: true,
  imports: [],
  templateUrl: './solicitud-respuesta.component.html',
  styleUrl: './solicitud-respuesta.component.css'
})
export class SolicitudRespuestaComponent implements OnInit{

  solicitudInspService = inject(SolicitudInspeccionService); 
  constructor(private route: ActivatedRoute) {}

  respuesta: any;
  detalle: any;

  ngOnInit() {
    console.log(this.respuesta);
    this.respuesta = this.solicitudInspService.getResponse();
    
}
}
