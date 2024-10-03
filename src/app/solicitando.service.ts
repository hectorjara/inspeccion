import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SolicitandoService {

  private apiUrl = 'http://localhost:3000/api/personas';

  protected solicitud:[] | undefined;
  private readonly _http = inject(HttpClient);
  constructor() { }

  guardarSolicitud(estado: string){
    console.log('Solicitud Guardada y estado: ', estado);
  }

  guardarPersona(nombre: string, apellido: string, telefono: string, email: string): Observable<any>{
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    const personaData = { nombre, apellido, telefono, email };
    return this._http.post(this.apiUrl, personaData, { headers } );    
  }
}
