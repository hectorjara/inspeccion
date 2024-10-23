import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
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
    email: new FormControl('', [Validators.required, Validators.email]),
    contraseña: new FormControl('', [Validators.required])
  });

  ingresar() {
    if(this.formularioLogin.valid){
      const usuario: Usuario = this.formularioLogin.value as Usuario;
      this.authService.loginUsuario(usuario).subscribe({
        next: (res) => {
          if (this.authService.estaLogueado()){
            this.router.navigate(['/inicio']);
          }
          console.log('Respuesta: ', res);
        }
      });
    }

  }
}
