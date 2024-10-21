import { Routes } from "@angular/router";
import { SolicitudesComponent } from "./solicitudes/solicitudes.component";
import { SolicitudInspeccionComponent } from "./solicitud-inspeccion/solicitud-inspeccion.component";

export default [
    {
        path: '',
        component: SolicitudesComponent
    },
    {
        path: 'registrar',
        component: SolicitudInspeccionComponent
    }
] as Routes;