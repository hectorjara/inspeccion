import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Usuario } from '../models/usuario'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrlLogin = 'http://localhost:3000/api/login';

  private readonly _http = inject(HttpClient);
  constructor() { }

  estaLogueado() {
    return localStorage.getItem('UsuarioAutenticado') !== null;
  }

  loginUsuario(usuario: Usuario): Observable<any>{
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this._http.post<any>(this.apiUrlLogin, usuario, { headers } )
    .pipe(tap((res) => { //quí se utiliza el operador tap, permite ejecutar un efecto secundario sin modificar el valor del observable. A futuro iria un token de respuesta.
      if (res.msg==='inicio de sesion exitoso'){ //A cambiar
      localStorage.setItem('UsuarioAutenticado', "Admin")//Cambiar por un token a futuro
      }
      else if(res.msg==='Nombre de Usuario o Contraseña incorrectos.') {
        console.log('ni idea')
      }      
    }));
  }
}
