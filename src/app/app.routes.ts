import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { PersonaFormComponent } from './form-persona/form-persona.component';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { authGuard } from './auth/auth.guard';
import { RegistroComponent } from './auth/registro/registro.component';
import { SolicitudInspeccionComponent } from './solicitud-inspeccion/solicitud-inspeccion.component';
import { SolicitudRespuestaComponent } from './solicitud-respuesta/solicitud-respuesta.component';

export const routes: Routes = [
    {
        path: '', redirectTo: '/login', pathMatch: 'full' //Comentar pathMatch
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'registro',
        component: RegistroComponent
    },
    {
        path: 'personas',
        component:PaginaPrincipalComponent
    },
    {
        path: 'solicitud',
        component:SolicitudInspeccionComponent
    },
    {
        path: 'solicitud-respuesta',
        component: SolicitudRespuestaComponent
    }
];
