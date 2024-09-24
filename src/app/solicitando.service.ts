import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SolicitandoService {
  protected solicitud:[] | undefined;
  constructor() { }

  guardarSolicitud(estado: string){
    console.log('Solicitud Guardada y estado: ', estado);
  }
}
