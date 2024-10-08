import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../servicios/auth.service';
import { Usuario } from '../../models/usuario'
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {
  authService = inject(AuthService);
  router = inject(Router);
  formularioRegistro = new FormGroup({
    nombre_usuario: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    contrasenia: new FormControl('', [Validators.required, Validators.minLength(8)]),
    rol: new FormControl('', [Validators.required]),
    nombres: new FormControl('', [Validators.required]),
    apellidos: new FormControl('', [Validators.required])
  });

  registrar() {
    if(this.formularioRegistro.valid){
      const usuario: Usuario = this.formularioRegistro.value as Usuario;
      this.authService.registroUsuario(usuario).subscribe({
        next: (res) => {
          if (this.authService.estaLogueado()){
            this.router.navigate(['/registro']);
          }
          console.log('Respuesta: ', res);
        }
      });
    }

  }
}