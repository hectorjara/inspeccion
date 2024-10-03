import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { SolicitandoService } from '../solicitando.service';

@Component({
  selector: 'app-form-persona',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form-persona.component.html',
  styleUrl: './form-persona.component.css'
})
export class PersonaFormComponent {
  solicitandoServicio = inject(SolicitandoService);
  formularioPersona = new FormGroup({
    nombre: new FormControl(''),
    apellido: new FormControl(''),
    telefono: new FormControl(''),
    email: new FormControl('')
  });

  enviarSolicitud() {
    this.solicitandoServicio.guardarPersona(
      this.formularioPersona.value.nombre ?? '',
      this.formularioPersona.value.apellido ?? '',
      this.formularioPersona.value.telefono ?? '',
      this.formularioPersona.value.email ?? ''
    ).subscribe({
      next: (res) => {
        console.log('Respuesta: ', res);
      }
    });
  }

}
