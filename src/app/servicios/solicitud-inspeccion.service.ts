import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { SolicitudInspeccion } from '../models/solicitud-inspeccion'

@Injectable({
  providedIn: 'root'
})
export class SolicitudInspeccionService {
  private apiUrl = 'http://localhost:3000/api/solicitudInspeccion';
  private readonly _http = inject(HttpClient);
  private response:any;


  constructor() { }

  obtenerSolicitudes(){
    const token = localStorage.getItem('UsuarioAutenticado');
    console.log(token);
    const headers = new HttpHeaders({'Authorization': `Bearer ${token}`});
    return this._http.get<any>(this.apiUrl, { headers });
  }

  crearSolicitud(solicitud: SolicitudInspeccion): Observable<any>{
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this._http.post<any>(this.apiUrl, solicitud, { headers } );
  }

  setResponse(response:any){
    this.response = response;
  }

  getResponse(){
    return this.response;
  }

  eliminarSolicitud(id_solicitud: number): Observable<any> {
    const token = localStorage.getItem('UsuarioAutenticado');
    const headers = new HttpHeaders({'Content-Type': 'application/json','Authorization': `Bearer ${token}`});
    return this._http.delete<void>(`${this.apiUrl}/${id_solicitud}`, { headers });
  }
}
