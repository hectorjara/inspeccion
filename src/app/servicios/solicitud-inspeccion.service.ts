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

  constructor() { }

  crearSolicitud(solicitud: SolicitudInspeccion): Observable<any>{
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this._http.post<any>(this.apiUrl, solicitud, { headers } );
  }
}
