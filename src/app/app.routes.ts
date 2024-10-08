import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { PersonaFormComponent } from './form-persona/form-persona.component';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { authGuard } from './auth/auth.guard';

export const routes: Routes = [
    {
        path: '', redirectTo: '/login', pathMatch: 'full' //Comentar pathMatch
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'personas',
        component:PaginaPrincipalComponent
    }
];
