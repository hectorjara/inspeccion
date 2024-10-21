import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { SolicitandoService } from '../../servicios/solicitando.service';

@Component({
  selector: 'app-form-solicitud',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form-solicitud.component.html',
  styleUrl: './form-solicitud.component.css'
})
export class FormSolicitudComponent {
  solicitandoServicio = inject(SolicitandoService);
  formulario = new FormGroup({
    idSolicitud: new FormControl(''),
    fechaSolicitud: new FormControl(''),
    estado: new FormControl(''),
    idVivienda: new FormControl(''),
    numeroExpediente: new FormControl(''),
    tipoSolicitud: new FormControl(''),
    idSector: new FormControl(''),
  });

  enviarSolicitud() {
    this.solicitandoServicio.guardarSolicitud(
      this.formulario.value.estado ?? ''
    );
  }

}
