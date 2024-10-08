import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../servicios/auth.service';
import { Usuario } from '../../models/usuario'
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  authService = inject(AuthService);
  router = inject(Router);
  formularioLogin = new FormGroup({
    email: new FormControl(''),
    contrasenia: new FormControl('')
  });

  ingresar() {
    const usuario: Usuario = this.formularioLogin.value as Usuario;
    this.authService.loginUsuario(usuario).subscribe({
      next: (res) => {
        if (this.authService.estaLogueado()){
          this.router.navigate(['/personas']);
        }
        console.log('Respuesta: ', res);
      }
    });
  }
}
