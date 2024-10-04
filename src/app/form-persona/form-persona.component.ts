import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { SolicitandoService } from '../solicitando.service';
import { Persona } from '../persona'; 

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
    const persona: Persona = this.formularioPersona.value as Persona;
    this.solicitandoServicio.guardarPersona(persona).subscribe({
      next: (res) => {
        console.log('Respuesta: ', res);
      }
    });
  }

}
