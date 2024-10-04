import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persona } from './persona'; 


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

  guardarPersona(persona: Persona): Observable<any>{
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this._http.post<Persona>(this.apiUrl, persona, { headers } );    
  }
}
