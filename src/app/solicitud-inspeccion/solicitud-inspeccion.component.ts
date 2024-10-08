import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SolicitudInspeccion } from '../models/solicitud-inspeccion';
import { SolicitudInspeccionService } from '../servicios/solicitud-inspeccion.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-solicitud-inspeccion',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './solicitud-inspeccion.component.html',
  styleUrl: './solicitud-inspeccion.component.css'
})
export class SolicitudInspeccionComponent {
  
  solicitudInspService = inject(SolicitudInspeccionService); 
  router = inject(Router);
  formularioSolicitudInspeccion = new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    apellido: new FormControl('', [Validators.required]),
    telefono: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    barrio: new FormControl(''),
    sector: new FormControl(''),
    manzana: new FormControl(''),
    lote: new FormControl(''),
    fechaSolicitud: new FormControl(new Date(), [Validators.required]),
    estado: new FormControl('Pendiente', [Validators.required]),
    numeroExpediente: new FormControl(''),
    tipo_Solicitud: new FormControl('', [Validators.required]),
  });

  ingresarSolicitud() {
    if (this.formularioSolicitudInspeccion.valid) {
      const nuevaSolicitud: SolicitudInspeccion = this.formularioSolicitudInspeccion.value as SolicitudInspeccion;
      this.solicitudInspService.crearSolicitud(nuevaSolicitud).subscribe(
        response => {
          console.log('Solicitud creada con éxito', response);
          // Aquí puedes agregar lógica adicional, como mostrar un mensaje de éxito o redireccionar
        },
        error => {
          console.error('Error al crear la solicitud', error);
          // Aquí puedes manejar el error, como mostrar un mensaje al usuario
        }
      );
    }
  }

}