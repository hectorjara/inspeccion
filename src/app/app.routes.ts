import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { PersonaFormComponent } from './form-persona/form-persona.component';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';

export const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'personas',
        component:PaginaPrincipalComponent
    }
];
